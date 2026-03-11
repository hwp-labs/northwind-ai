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
  //
  previewPostCards: "/preview/post-cards",
  previewFAQPostCard: "/preview/post-cards?tabIndex=1",
  previewMonthlyPostCard: "/preview/post-cards?tabIndex=2&page=4",
  previewPodcastPostCard: "/preview/post-cards?tabIndex=3&page=3",
  //
  podcast: "/podcast",
  PodcastTranscript: (id: unknown) => `/podcast/transcript/${id}`,
  createPodcastTranscript: "/podcast/transcript/create",
} as const satisfies Record<string, PathType>;

export const PROTECTED_PATH = {
  dashboard: "/dashboard",
  industries: "/industries",
  visitors: "/visitors",
  contacts: "/contacts",
} as const satisfies Record<string, PathType>;
