"use server";

import nodemailer from "nodemailer";
import { ApiResponse } from "@/lib/supabase/types";
import { APP } from "@/constants/APP";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: process.env.SMTP_SECURE === "true", // true for 465
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Optional: verify transporter on server start
transporter
  .verify()
  .then(() => console.log("SMTP transporter ready"))
  .catch((err) => console.error("SMTP transporter error:", err));

export async function sendEmailAction(args: {
  to: string | string[];
  subject: string;
  body: string;
  incognito?: boolean;
}): Promise<ApiResponse<string>> {
  const to = args.incognito ? undefined : args.to;
  const bcc = args.incognito ? args.to : process.env.SMTP_BCC;

  try {
    const info = await transporter.sendMail({
      from: `${APP.name} <${APP.email}>`,
      bcc,
      to,
      subject: args.subject,
      html: args.body,
    });

    return { data: info.messageId, error: undefined };
  } catch (err: any) {
    return { data: null, error: err?.message || "NodemailerUnknownError" };
  }
}

export async function sendBatchEmailAction(args: {
  to: string | string[];
  subject: string;
  body: string;
}): Promise<ApiResponse<string>> {
  const BATCH_SIZE = 50;

  try {
    const recipients = Array.isArray(args.to) ? args.to : [args.to];
    const messageIds: string[] = [];

    for (let i = 0; i < recipients.length; i += BATCH_SIZE) {
      const batch = recipients.slice(i, i + BATCH_SIZE);

      const info = await transporter.sendMail({
        from: `${APP.name} <${APP.email}>`,
        bcc: batch,
        to: process.env.SMTP_BCC,
        subject: args.subject,
        html: args.body,
      });

      messageIds.push(info.messageId);
    }

    return {
      data: messageIds.join(","),
      error: undefined,
    };
  } catch (err: any) {
    return {
      data: null,
      error: err?.message || "NodemailerUnknownError",
    };
  }
}
