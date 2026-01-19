export type ConnectivityItem = {
  name: string;
  distance: string;
};

export type ConnectivityImage = {
  src: string;
  alt?: string;
};

export type PanelGradient = {
  from: string;
  to: string;
};

export type LaunchingConnectivityProps = {
  launchingText: string;
  title: string;
  subtitle: string;
  items: ConnectivityItem[];
  image: ConnectivityImage;
  panelGradient?: PanelGradient;
};
