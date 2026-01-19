export type Tag = string;

export type MediaCard = {
  id: string | number;
  title: string;
  description: string;
  image: string;
  tags?: Tag[];
  textColor?: string;
  onPlay?: () => void;
};

export type ExperienceGridBG = {
  left: string;
  right: string;
};

export type Watermark = {
  enabled?: boolean;
  text?: string;
};

export type ExperienceGridData = {
  bg: ExperienceGridBG;
  watermark?: Watermark;
  cards: MediaCard[];
};
