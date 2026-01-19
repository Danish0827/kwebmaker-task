export type TabKey = "about" | "coaches" | "vision" | "mission";

export type Stat = {
  value: string | number;
  label: string;
};

export type ImageItem = {
  src: string;
  alt?: string;
};

export type TabContent = {
  heading: string;
  description: string;
  stats: Stat[];
  buttonText: string;
  images: ImageItem[];
};

export type TabsData = Record<TabKey, TabContent>;

export type Tab = {
  key: TabKey;
  label: string;
};
