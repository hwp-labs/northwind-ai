# Northwind AI Podcast - Keynote

Greetings everyone 👋, and welcome to another **Design Session of Northwind AI Podcast**,

where we talk with Founders, Engineers, and tech-space Creators who are at the

idea stage, MVP stage, or post-launch stage of their respective Startups!

---

I’m your host, **Emanuel**, I am an **AI Product Engineer**,

- I am the creator of **Northwind - AI Automation Web Services**
- I'm also the creator of **Northstar Analytics** (which I’ll talk about much later in the episode)

---

Tonight, we’re having a Design Session with **Joshua Uyi**.

Joshua is a **Software Engineer** and the creator of **Izivote**

Izivote is a cloud-based voting platform for award events and campaigns.

Nice one!

Joshua, thanks for taking out time to vibe with us tonight.

How was your weekend, sir?

## [Guest replies]

Joshua and I actually met as Computer Science students at Benson Idahosa University, over 12 years ago

which is crazy, but mehn whatever

During my finals, I used to organize these **Google Developer Community** events

which he and some of our mutual friends would attend and volunteer to assist

And by the end of the following year, he launched Izivote as a side project

which has been used for several award shows at the university for the past 10 years

Exciting stuff!

## Problem Statement

- How did the idea for Izivote come about ?
- Why "izivote", and not "ezvote", was it a domain issue or what exactly ?

### Challenges

- If you can recall, what were some of the early challenges you faced while building the solution,
- and was it launched in time for your own final year award event?

## Value Proposition

Two of our listeners asked this question last week;

What will you say makes Izivote standout from other voting platforms out there ?

## Target Platform & Audience

I was having a conversation with a colleague yesterday,

said he used Izivote for their finals award show at Western Delta Uni, 2017

## Revenue Model

## Funding Strategy

## Go-To-Market Strategy

# [Acknowlegde listeners]

We have talked briefly about the business aspect

Let's context switch over to some technical details

But before that, let me acknowledge some of our listeners tonight

My Wife said i didn't knowlegde you guys last week, which I believe I did multiple times, but let me do that now

> Hello {name}, thanks for joining!

---

If you're just joining in, you're welcome to another **Design Session of Northwind AI Podcast**,

where we talk with Founders, Engineers, and tech-space Creators who are at the

idea stage, MVP stage, or post-launch stage of their respective Startups!

Tonight, we’re having a Design Session with **Joshua Uyi**

creator of Izivote-a cloud-based voting platform for award events and campaigns.

---

- You can access the keynote summary of this episode by clicking the link in the comment section
- If you have any questions simply drop a comment or request to speak and I'll open up the mics for you.

# Interactive Session

## Tech Stack

- We have an interactive design session within the next (2 mins)
- Introduce yourself by telling us your name, job title and location
- And tell us if you're to build a voting platform today,
- What tech stack will you use and why

---

- PERN stack like MERN stack but with PostgreSQL instead of MongoDB
- Reduced context switching between languages
- Next.js is technically PERN stack

---

- Frontend (React)
- Backend (Node)
- Database (Postgres)
- File Storage (Supabase)
- Server (Vercel)

## Core Features or Modules

- Users\*
- Events
- Categories
- Nominees
- Votes

## Core Data Model

```ts
interface VoteSchema {
  id: string; // uuid
  // timestamps
  createdAt: string;
  updatedAt: string;
  deteledAt: null | string;
  // main
  username: string; // email or tel
  otp: string;
  eventId: string;
  categoryId: string;
  nomineeId: string;
  // misc
  status: number; // unverified, verified
  notes: null | string; // json (user_agent, geo, ip)
}
```

To make it more secure, maybe for the use-case of Elections;

- You can require voters to register (which is what we have as voters card)
- Omit username and otp from the previous schema
- Add userId and audit fields (createdBy, updatedBy, deteledBy)
- write a scripts to auto-delete rows where userId doesn't match createdBy

```ts
interface VoteSecureSchema extends Omit<VoteSchema, "username" | "otp"> {
  // audits
  createdBy: string;
  updatedBy: string;
  deteledBy: null | string;
  // main
  userId: string;
}
```

The way it works;

- Voters can vote in different categories saved on the browser/device and seal the votes by clicking on the save button. Just like how some e-commerce websites work where users can add items to cart and then it's saved to database when u proceed to checkout.
- Limit networks requests to the database
- Obviously use Redis cache for checking the results

## NFR

- AI/ML
- Blockchain
- Cloud Computing
- Cybersecurity
- Data Analytics
- DevOps

# [Advert placement]

- Northstar Analytics – an AI-native, cross-platform data analytics service

1. With Northstar Analytics you can track KPIs and understand user signals your website or app such as;

- Retention Rate
- Churn Rate
- Activation Rate
- Conversion Rate
- Net Promoter Score (NPS)

2. With Northstar Analytics it is **Cross-Platform** which means you can integrate in your website or app or both

3. It is **Native UI** which means as opposed to visualize directly in your admin dashboard without leaving ur app, unlink Firebase and PostHog

- With AI-native tools is about bringing the solution to where to already work
- That's why you see so many services like visual studio, figma, supabase, notion have their AI assists embeded so you do need to leave the platform

4. And talking about AI, Northstar Analytics has a PRO version that includes;

- Conversational query interface using RAG technique (RAG stands for Retrieval-Augmented Generation)
- AI-powered reports and insights
- Provide context taht aids decision making (final boss of a data analytics)
- Data analytics students here can talk about that

5. With Northstar Analytics you'll get the professional services of a Software Engineer and a Data Analyst as a single individual

- So design decisions and implementation strategy is done swiftly without collaboration chanllenges, becus it's one person (asin, me ofcurse)

6. And it's actually a one-time setup fee because as I mentioned, the integration is done directly within ur application,

- So no additional charges beyond your annual doman/server hosting fees that you already pay for

> Visit northwindai.org to get started or send me a DM

## Trivia

- Hiring or voluteers
- Next 3-5 years projection
- Voting systems in Nigeria

## Website URL

> izivote.com

## Remarks

- Call to action
- Peer advice
- Lessons learned

## Motivation

4 key points for building a solution:

- Design is King (First Impression, Fb, Nairaland - Flipboard)
- Deploy First, Upgrade Next (25% MVP, Customer Acquition)
- Scale As You Grow (Rudimental Backend)
- Pivot When Required (Listen to user signals)

> The goal is to move from Minimum Viable Product to Product Market Fit

- There is technically no bad idea
- Often times, it is the implementation that is off track
- Or you may not be the best person to solve it (ref. YC)
- Other times it's an indication that ure about to create a `Disruptor` (Eg. GoKada, Opay, AwaDoc, Andrea)
- Don't be intimidated by Monopoly or Competitors in your space
- In Economics, some of the basic strategies to distinguish your business is Price, Quality and Location
- And, in the internet space, you have Niche and Variety.
- Implementation speed bumbs and hold ups, navigate, compromise and pivot is what makes you successful (Eg. GoKada, Opay, AwaDoc, Andrea)

> So I encourage you not to be discouraged, asin "Lasisi, Do Your Thing"!

# Outro

- That said, we have come to the end of tonight's Design Session with Joshua
- The Northwind AI Podcast holds live on Twitter Spaces every Sunday at 8 PM (West African Time)

- You can actually listen to this one, and previous design session recordings on my Twitter profile
- And, you can view the Keynote summary by clicking on the link in the comment section.

- If you or someone you know is building something and would like to have a design session,
  please send a DM here on Twitter or on WhatsApp, for those of you that have my number.

- Yes, @BannyDav, I've responded to your message on Twitter, hit me back bro.
- Thank you Joshua Uyi for coming on the show and keep up the great job.
- And thanks to everyone listening.
- My Wife said I didn't acknowledge you guys last week, which I did, but thanks again for joining.
- If you would like to Sponsor and Support the Northwind AI Podcast, my account details are attached to the Keynotes link in the comment section.

- Have a productive week, and see you next Sunday.
