const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const getWaUrl = (tel?: string | null) => {
  if (tel) return "https://wa.me/" + tel.replace("+", "");
};
const getWaGroupUrl = (uuid?: string | null) => {
  if (uuid) return "https://chat.whatsapp.com/" + uuid;
};

const getXUrl = (username?: string | null) => {
  if (username) return "https://x.com/" + username;
};

export const urlUtil = {
  slugify,
  getWaUrl,
  getWaGroupUrl,
  getXUrl,
};
