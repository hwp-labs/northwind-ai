#!/usr/bin/env python3
"""
Bulk Email API w/Redis Queue

Author: Northwind AI <northwindai.org>
Date: 2026-06-21
"""

import asyncio
from config import *
from datetime import datetime, timezone
from fastapi import FastAPI
from fastapi.responses import JSONResponse
from fastapi_mail import FastMail, MessageSchema, ConnectionConfig
from itsdangerous import URLSafeTimedSerializer, BadSignature
from rq import Queue
import redis
from supabase import create_client

# SUPABASE CONFIG
supabase = create_client(SUPABASE_URL, SUPABASE_KEY)

# SMTP CONFIG
mail_config = ConnectionConfig(
  MAIL_USERNAME=SMTP_USER,
  MAIL_PASSWORD=SMTP_PASS, # https://myaccount.google.com/apppasswords
  MAIL_FROM="Northwind AI <no-reply@northwindai.org>",
  MAIL_SERVER="smtp.gmail.com",
  MAIL_PORT=587,
  MAIL_STARTTLS=True,
  MAIL_SSL_TLS=False,
)
fast_mail = FastMail(mail_config)

# REDIS CONFIG
redis_conn = redis.from_url(REDIS_URL)
queue = Queue(connection=redis_conn)

# URL ENCODER
serializer = URLSafeTimedSerializer(SECRET_KEY)

app = FastAPI() # const app = express();

def email_queue(payload):
  async def handle():
    tasks = []
    for p in payload:
      res = fast_mail.send_message(MessageSchema(
        subject=p["subject"],
        recipients=[p["to"]],
        body=p["body"],
        subtype="html",
      ))
      tasks.append(res)

    await asyncio.gather(*tasks) # Promise.all()

  asyncio.run(handle())

@app.post("/api/notifications/episode-invite")
def post_episode_invite():
    res = supabase.table("rsvp").select("email").is_("deleted_at", "null").execute()
    recipients = {row["email"] for row in res.data}  # Dedup w/Set
    recipients = list(recipients)

    subject = "🔴 LIVE: Comms Strategy For Startups"
    content = """
    <h1>Northwind AI Podcast E17 - Comms Strategy For Startups 💡</h1>
    <a href="https://x.com/i/spaces/1DGleemXPqzJL">Join the conversation</a>
    """

    for i in range(0, len(recipients), EMAIL_BATCH_SIZE): # 0, 100, 200, ...
        batch_recipients = recipients[i:i + EMAIL_BATCH_SIZE] # 0-99, 100-199, 200–299, ...
        batch_payload = []

        for email in batch_recipients:
          token = serializer.dumps(email, salt=UNSUBSCRIBE_SALT)
          body = f"""
          {content}
          <hr>
          <small>
            <a href="{APP_URL}/unsubscribe?token={token}">Unsubscribe</a>
          </small>
          """
          batch_payload.append({
            "subject": subject,
            "to": email,
            "body": body
          })

        queue.enqueue("worker.email_queue", batch_payload)

    return {"success": True, "message": f"{len(recipients)} emails sent!"}

@app.delete("/api/notifications/episode-invite")
def delete_episode_invite(token: str):
    try:
      email = serializer.loads(token, salt=UNSUBSCRIBE_SALT)
    except BadSignature:
      return  JSONResponse(status_code=400, content={"success": False, "message": "Invalid token!"})

    deleted_at = datetime.now(timezone.utc).isoformat()
    supabase.table("rsvp").update({"deleted_at": deleted_at}).eq("email", email).execute()

    return {"success": True, "message": "Email unsubscribed!"}

