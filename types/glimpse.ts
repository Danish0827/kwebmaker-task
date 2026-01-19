export type PointItem = {
  text: string;
};

export type ImageItem = {
  src: string;
  alt?: string;
};

export type GlimpseSectionData = {
  title: string;
  description: string;
  pointsLeft: PointItem[];
  pointsRight: PointItem[];
  buttonText: string;
  leftImage: ImageItem;
  rightImage: ImageItem;
  backgroundImage?: string;
};
