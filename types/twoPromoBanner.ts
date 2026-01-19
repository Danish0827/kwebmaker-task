export type BannerSide = {
  title: string;
  description: string;
  buttonText: string;
  onClick?: () => void;
};

export type LeftSide = BannerSide & {
  image: string;
};

export type RightSide = BannerSide & {
  bgColor?: string;
  watermarkImage?: string;
};
