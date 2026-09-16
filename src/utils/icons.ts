export const ICON_BY_PLATFORM = {
  Instagram: "camera",
  YouTube: "play",
  TikTok: "music-2",
  LinkedIn: "briefcase",
  GitHub: "code",
  Spotify: "audio-lines",
  Twitter: "x",
  Discord: "messages-square",
  Website: "globe",
  Email: "mail",
  Phone: "phone",
  PodCast: "mic",
  Store: "shopping-bag",
  Dribbble: "paintbrush",
} as const;

export type Platform = keyof typeof ICON_BY_PLATFORM;

export type PlatformIconName = (typeof ICON_BY_PLATFORM)[Platform];
