interface MockParams {
  loader?: number | boolean;
  portal?: number | boolean;
  formData?: number | boolean;
  action?: number | boolean;
  router?: number | boolean;
  //
  show?: number | boolean;
  skip?: number | boolean;
}

const devMode = 0;

export const MOCK = {
  explorer: {
    show: devMode,
  },
  useDeviceDetails: {
    skip: devMode,
  },
  VisitorTrackerWidget: {
    show: 0,
  },
  home: {
    portal: 0,
  },
  login: {
    formData: 0,
    action: 0,
    router: 0,
  },
  getStarted: {
    portal: 0,
    formData: 0,
    action: 0,
    router: 0,
  },
  podcastRsvp: {
    formData: devMode,
    action: 0,
    router: 0,
  },
  sendWelcomeEmail: {
    skip: 0,
  },
  sendPodcastInviteEmail: {
    formData: devMode,
  },
} as const satisfies Record<string, MockParams>;
