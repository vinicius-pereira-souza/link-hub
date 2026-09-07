export const IconNameObject = {
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
  Dribble: "paintbrush",
} as const;

export type IconNameTypeKey = keyof typeof IconNameObject;
export type IconCurrentNameTypeValue =
  (typeof IconNameObject)[keyof typeof IconNameObject];

export const iconsNameList = Object.keys(IconNameObject) as IconNameTypeKey[];
