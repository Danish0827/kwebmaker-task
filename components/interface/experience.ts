export type Tag = string;

export type MediaCard = {
  id: string | number;
  title: string;
  description: string;
  image: string;
  tags?: Tag[];
  videoUrl?: string;
};

export type ExperienceBg = {
  left: string;
  right: string;
};

export type ExperienceWatermark = {
  enabled?: boolean;
  text?: string;
};

export type ExperienceProps = {
  cards: MediaCard[];
  bg: ExperienceBg;
  watermark?: ExperienceWatermark;
};
