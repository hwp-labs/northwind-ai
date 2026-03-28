# Northwind AI Podcast - Keynote

### [Soundcheck@6]

- Drink water during question interval
- Do the Intro
- Do the Background
- Explain the Core Data Model
- Disclose the trivia questions

# [Intro]

```ts
Greetings everyone 👋, and welcome to another `Design Session of the Northwind AI Podcast`,
where we talk with Founders, Engineers, and Creators in the tech-space
who are at the idea stage, MVP stage, or post-launch stage of their respective startups.
```

```ts
I am `Emanuel`, an `AI Product Engineer`,
- I am the creator of `Northwind - AI Automation Web Services`
- and, the creator of `Northstar Analytics` (which I’ll talk about much later in the episode)
```

```ts
Tonight, we’re having a design session with `Joshua Uyi`.
Joshua is a `Software Engineer` and the creator of `Izivote`.
Izivote is a cloud-based voting platform for award shows and campaigns

// Nice!

Joshua, thanks for taking out time to vibe with us tonight,
How was your weekend, sir ?
```

### [Guest replies]

```ts
Hi Emmanuel, thanks for having me.
My weekend was interesting, and yours ?
```

### [Host replies, if guest asks]

```ts
I Am Fine | It Was Great,
I mean can't complain,
thanks for asking.
```

### [Background #HowWeMet]

```ts
Joshua and I actually met as Computer Science students at Benson Idahosa University,
which was over 12 years ago, it's crazy.

During my finals, I used to organize these `Google Developer Community` events,
which he and some of our mutual friends would attend and volunteer to assist.

By the end of the following year and the next, 2015/2016,
he launched Izivote, initially as a side project,
which has now been used for several award shows at the university for the past 10 years.

// Exciting stuff!
```

# Problem Statement #How_Why

- Joshua, how did the idea for Izivote come about ?
- And, why "izivote", and not "easyvote" or "ezvote", was it a domain issue or what is the story there ?

### Target Audience & Platform #Who_Where

- Who is Izivote for ?
- Is it a B2B or B2C or both ?
- and, on what platforms is Izivote currently available ?

> Visit izivote.com

### Value Proposition

> Two of our listeners actually asked this question in a previous design session;

Joshua, what makes Izivote standout from other voting platforms in that space ?

```ts
And for listeners who are building products, please take note of this very important question,
essentially, what i'm asking Joshua is, what is the `Value Proposition` ?

Joshua, please go ahead.
```

### Revenue Model

- What is your `Revenue Model` ?
- How do you make money from Izivote ?

### Funding Strategy

- How did you fund Izivote ?
- How were you able to raise money for the domain and hosting, engineering and marketing teams ?

### Go-To-Market Strategy

```ts
Now, I was having a conversation with a colleague after I published the invite for this episode,
and interestingly, he mentioned that They used Izivote
for the final year award show at Western Delta University, back in 2017.
Which was impressive and kind of a surprise to me because I assumed Izivote was only used within BIU.
```

So, talk to us about your `Go-To-Market Strategy` and feel free to "name drop" other well known users ?

# [Halftime Intro]

```ts
If you're just joining, welcome to another `Design Session of the Northwind AI Podcast`,
where we talk with Founders, Engineers, and Creators in the tech-space
who are at the idea stage, MVP stage, or post-launch stage of their respective startups.

Tonight, we’re having a design session with `Joshua Uyi`,
the creator of `Izivote`-a cloud-based voting platform for award shows and campaigns.

You can read the "executive summary" of everything we're discussing tonight
by clicking on the [View keynotes] link in the comment section.
And, if you have any questions or feedback,
feel free to drop a comment or [Request to Speak] and I'll open up the mic for you to do so.
```

### [Ice Breaker]

```ts
My Wife said i didn't acknowledge you guys last week,
which I believe I did, multiple times, but no worries, let's go
---
I actually invited a VIP listener last week, who just so happens to be a
#Rust Backend Engineer working on a FinTech app,
and he was shocked his Name & Avatar didn't show up on the guest list
along with 112 other persons on the call, I can only see 8 avatars on my screen,

so here's what we're going to do tonight, moving forward, and for subsequent episodes,
as soon as you join call, kindly drop your "intro" in the comment section;
- Name
- Location
- and, Job Title (FE, BE, FS, MX, DX, PD, etc)
and, i will do the `@mentions` from there, cool ? [repeat]
```

### Challenges & Lessons Learned

```ts
// Moving on...

I have one more question for Joshua on the business side,
and then we'd `context switch` over to some technical details.
```

Joshua, I know it has been at least a decade since your launched Izivote;

- But can you talk about some of the early challenges you encountered whilst building Izivote
- and also, some key lessons learned along your journey as a `solo technical Founder`

# [Interactive Design Session]

```ts
Alright! We are now entering in the `interactive design session` of the podcast,
and the first question is for our listeners;

If you were to build a voting platform,
let's imagine you're at a Hackathon event,
and you're asked to prototype a voting platform,
what Tech Stack will you use ?

Drop your answers in the comment box,
and I will pick some persons at random to tell us
why they chose that particular tech stack [repeat]
```

# [Acknowledge Listeners]

```ts
Whilst that is going on,
let me use this opportunity to @mention some of our listeners on the call

`Hi ${displayName}, thanks for joining!`
```

### Tech Stack

So Joshua, over to you, what tech stack did you use and why ?

```sh
# My Answer

- *SPA or MPA

- PERN stack just like MERN stack but with PostgreSQL instead of MongoDB
- PostgreSQL is a relational database with superior indexing and query optimization,
- PostgreSQL is ACID compliant which ensures data integrity, best for complex queries and joins
- PostgreSQL also supports JSON, which can technically be used as a document-based database (if you know wassup)
- PostgreSQL is like like if MySQL + MongoDB got together and had a kid

- Frontend (React)
- Backend (Node)
- Database (Postgres)
- File Storage (Supabase)
- Server (Vercel)

- Now check this, Next.js is technically PERN stack
- Next.js is a full-stack JavaScript framework
- so you can built the FE and BE together with zero context switching
- Esply in the context of a Hackathon event where time is limited
- Next.js is typically what you'll call "A Modern Monorepo Architecture"
```

### Core Modules

What are some of the core tables in the database ?

```sh
- Users
- Events
- Categories
- Nominees
+ Votes
```

### Core Data Model

Describe a class with properties and methods that represent a core database table ?

> Use Votes table because I believe it has the most relationship with the other tables.

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

### NFR

Which of the following technologies are used in the implementation of your project/app ?

- AI/ML
- Blockchain
- Cloud Computing
- Cybersecurity
- Data Analytics
- DevOps

# [Advert Placement]

During

```ts
Northstar Analytics is an AI-native, Cross-platform Data Analytics Service.
It is an AI automation that helps startups `systematically` transform a
Minimum Viable Product into a Product Market Fit.

And what is a product market fit?
And how does Northstar Analytics help achieve this? visibility, signals, say/do

1. With Northstar Analytics you can track KPIs and understand user signals your website or app such as;

- Retention Rate
- Churn Rate
- Activation Rate
- Conversion Rate
- Net Promoter Score (NPS)

2. With Northstar Analytics it is `Cross-Platform` which means you can integrate in your website or app or both

3. It is `Native UI` which means as opposed to visualize directly in your admin dashboard without leaving ur app, unlink Firebase and PostHog

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

Why the name Northstar?

> Visit northwindai.org to get started or send a DM!
```

### Questions & Feedback

```ts
// We are now in the conference zone
You can tap on the mic icon on your screen to [Request to Speak],
or type your questions in the comment box.

On the topic of listening to your customers,
you can also use this medium to give our guest some feedback or suggestions.
```

### Trivia 1

- Where do you see Izivote in the next 3-5 years ?
- Are you currently hiring, do you need interns or volunteers ?
- and, on what platforms is Izivote currently available ?

### Trivia 2

- Are you a FS dev ? If so, which is more complex, FE or BE ?
- What's your opinion on the voting system in Nigeria ?
- What's your opinion on the wave of financial inclusion in Nigeria ?
- New CBN regulation for fintechs

```ts
// My opinion
```

### Business Realties & Peer Advice

```ts
I think one of the biggest bombshells that hit most technical founders
early on, is that building a successful product or service
requires more than just your idea, your skill and your implementation.

So, i mean, don't allow the "Vibe Coding" bubble fool you.

In fact, i make it a personal rule not to call any solution a business
until it has acquired it's first few "paying" users.

Same rule applies to products who rely on ads or sponsored content
as a revenue model.
```

So Joshua, can you conclude by sharing some of the harsh realities

of running a successful business that you've come to appreciate,

and maybe end with an advice (or two) for other founders on the call ?

# [Host Remarks]

- That said, we have come to the end of tonight's Design Session with Joshua Uyi-creator of Izivote.
- Joshua, thank you once again for taking out time to vibe with us tonight.
- Truly, ure doing a remarkable job and you have a great product here.
- I'm sure answering all these questions and reflecting back on your journey,
- has unlocked a new sense of appreciation for ur work, so please keep it up.
- And, I encourage founders and engineers on the call to keep doing what you doing,
- don't be discouraged, and never be intimated to put your work out there
- no matter how little the progress uve made.
- THE UNIVERSE IS ALWAYS WATCHING!

# [Outro]

- The Northwind AI Podcast holds live on Twitter Spaces every Sunday at 8 PM (West African Time).
- You can listen to this, and previous design session recordings on my Twitter page,
- and, you can also view the discussion summary by clicking on the [View keynotes] link in the comment box.

---

- If you or someone you know is building something and would like to have a design session,
- send a DM here on Twitter or on WhatsApp, for those of you that have my number.

---

- And ofcurse, if you would like to Sponsor and Support the Northwind AI Podcast,
- my account details are attached to the [View keynotes] link in the comment box.

`> Do have a productive week, and see y'al next Sunday.

# Notes

### 3 key points for building a solution

- Design is King (First Impression, Fb, Nairaland - Flipboard)
- Deploy First, Then Scale As You Grow
  - 25% MVP
  - Crude Backend
  - Customer Acquisition
- Pivot When Required (Listen to user signals)

> The goal is to move from Minimum Viable Product to Product Market Fit (\*Northstar Analytics)

---

### Ideas Are Not Nothing

```ts
There is technically no bad idea
Often times, it is the implementation that is off track
Or you may not be the best person to solve it (ref. YC)

Other times it's an indication that you are about to create a `Disruptor`
A disruptor is a solution that radically transforms an industry with unconventional
(Eg. Jumia, Moniepoint, OPay, AwaDoc*, Andrea*)
```

### Unit Economics

```ts
Don't be intimidated by Monopoly or Competitors in your space
In Economics, 3 basic strategies to distinguish your business is;
- Price
- Quality
- Location

And, in the internet space, where location is technically the world wide web,
you can also distinguish your business;
- by focusing on a Niche Market (which is how Chowdeck knocked off GoKada)
- having Variety (Paystack, Flutterwave, Monnify)
```

### Working class

```ts
For working class individuals, look don't be pressured into starting a business.

I was having a conversation with a colleague sometime in February,
whilst integrating Northwind AI for an e-commerce startup based in Sydney AU,
and I told him, look, the only reason I'm able to do this right now is because
the income from my 9-5 and software contracts can now sustain me and family,
which is the most important thing to me, and then whatever extra time I have left,
can be spent on building a service and a community around it.

So focus on making money to survive first and foremost, and forget about entrepreneurship
until u have enough passive income to do so.
```

### Motivation

```ts
Your Agility to Navigate implementation challenges,
and, your Humility to Compromise and Pivot when necessary
is what sets you apart from your competitors (Eg. Gokada)
```

> So I encourage you not to be discouraged, asin "Lasisi, Do Your Thing"!
