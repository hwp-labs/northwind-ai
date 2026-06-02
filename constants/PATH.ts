export type PathType = string | ((id: unknown) => string);

export const PATH = {
  home: "/",
  icon: "/icon",
  login: "/login",
  register: "/register",
  getStarted: "/get-started",
  terms: "/terms",
  dataPolicy: "/data-policy",
  manageCookies: "/manage-cookies",
  //
  previewWelcomeEmail: "/preview/emails/welcome",
  previewPodcastInviteEmail: "/preview/emails/podcast-invite",
  //
  previewMonthlyPostCard: "/preview/postcards?tabIndex=1&page=5",
  previewFAQPostCard: "/preview/postcards?tabIndex=2&page=1",
  previewPodcastPostCard: "/preview/postcards?tabIndex=3&page=6",
  previewPodcastBlog: "/preview/postcards?tabIndex=4",
  //
  podcast: "/podcast",
  podcastGuests: "/podcast/guests",
  podcastEpisodes: "/podcast/episodes",
  podcastAnalytics: "/podcast/analytics",
  podcastSupport: "/podcast/support",
} as const satisfies Record<string, PathType>;

export const PROTECTED_PATH = {
  visitors: "/visitors",
  listeners: "/listeners",
  dashboard: "/dashboard",
  industries: "/industries",
  contacts: "/contacts",
} as const satisfies Record<string, PathType>;
