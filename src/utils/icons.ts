import {
  Camera,
  Play,
  Music2,
  Briefcase,
  Code,
  AudioLines,
  X,
  MessageSquare,
  Globe,
  Mail,
  Phone,
  Mic,
  ShoppingBag,
  Paintbrush,
} from "lucide-react";

export const ICON_BY_PLATFORM = {
  Instagram: Camera,
  YouTube: Play,
  TikTok: Music2,
  LinkedIn: Briefcase,
  GitHub: Code,
  Spotify: AudioLines,
  Twitter: X,
  Discord: MessageSquare,
  Website: Globe,
  Email: Mail,
  Phone: Phone,
  PodCast: Mic,
  Store: ShoppingBag,
  Dribbble: Paintbrush,
} as const;

export type Platform = keyof typeof ICON_BY_PLATFORM;

export type PlatformIconName = (typeof ICON_BY_PLATFORM)[Platform];
