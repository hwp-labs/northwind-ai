# Northwind AI Podcast App

northwindai.org/podcast

> [5/13, 10:52 AM] 2gbeh: 💡 I got an idea lastnight to create an online social graph of podcast guests for audience to connect with after the show.. i will be needing these extra details 👆

## Mood Board

WhatsApp\* UI, YouTube, Play Store, Spotify, Apple Music, iHeartRadio

## Guest Form

- Photo/Avatar
- Name\*
- Email\* (for email invites)
- Tel/WhatsApp
- Location (City, Country)
- Headline (eg. Full Stack Developer, Software Engineer, Solution Architect, etc)
- Twitter handle\*
- Instagram handle
- LinkedIn URL
- Website (portfolio or product)

## Event

- episode number
- datetime
- topic (displayTitle)
- series (for filtering)
- Listeners (plays)
- [cta]: rspv, attend, play

## MVP

```
Icon, Podcast ... Search, Analytics
Hero (cover, displayTopic, dt, cta ... Rsvp+)
Guests carousel ... See all >
__Avatar+flag, displayName, username
Episodes ... See all >
__Calendar+todayIndicator, displayTopic, ?? ... plays+, cta
Fab.send: join the guestlist, join the community, support Northwind AI Podcast
❌ Banner support Northwind AI Podcast
```

## Modals

```
<IconCategoryPlus />
Rsvp/Attend sheet > success (note: email will be sent)

Playing recording ui sheet > [open twitter]

Become a guest > wa
Join the community > wa
Support Northwind AI > opay

FilterBy sheet
SortBy sheet
```

## Search Bar

```
I.scope "Search episodes, guests" i.x, i.funnel
#filterBy series, date (mmm,yyyy)
#sortBy date*, episode, guest, listeners
```

## Analytics

```
Total episodes (series)
Total guests (m, f)
Total listeners (avg)
Connections* (profile views/connect)

# kpi-card
episodes #9
guests #12

# ring chart
Listeners Overview ... all time*,7d,30d,90d,180d,365d
Average LPE(i) #11%
total listeners #636 ...avg listeners #70
```

## Profile

```
- Back, Avatar+ Name+ headline ... email, tel
- Back, screen title, .... Share ✨
  ...
  Avatar
  Name
  Headline
  📍Location (flag, city)
  X, in, ig, ...web
  ...
  Episodes 2
  Listeners 28
  Views 0
  ...
  Event list
  Date+ topic+,
  series chip?,
  episode #,
  Listeners,
  [play recording]
  [View keynote]
  ...
  (Connect: email)(call)
```
