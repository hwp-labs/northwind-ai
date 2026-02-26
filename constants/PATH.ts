export const PATH = {
  home: "/",
  icon: "/icon",
  login: "/login",
  register: "/register",
  getStarted: "/get-started",  
  terms: "/terms",
  dataPolicy: "/data-policy",
  manageCookies: "/manage-cookies",
  podcast: "/podcast",
  previewWelcomeEmail: "/preview/emails/welcome",
  previewPostCards: "/preview/post-cards",
  previewFAQPostCard: "/preview/post-cards?tabIndex=1",
  previewMonthlyPostCard: "/preview/post-cards?tabIndex=2&page=3",
  previewPodcastPostCard: "/preview/post-cards?tabIndex=3",
} as const;

export const PROTECTED_PATH = {
  dashboard: "/dashboard",
  industries: "/industries",
  visitors: "/visitors",
  contacts: "/contacts",
} as const;