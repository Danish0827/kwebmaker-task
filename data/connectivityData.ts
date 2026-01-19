import { ConnectivityItem, ConnectivityImage, PanelGradient } from "../types/connectivity";

export const connectivityItems: ConnectivityItem[] = [
  { name: "Hunter Valley Golf And Country Club", distance: "220m" },
  { name: "Rydges Resort Hunter Valley", distance: "550m" },
  { name: "Cressnock Airport", distance: "1.7km" },
  { name: "Cressnock CBD", distance: "7km" },
  { name: "Nulkaba Public School", distance: "4.8km" },
  { name: "Cressnock Hospital", distance: "7.3km" },
  { name: "Mcdonalds, KFC, Oporto", distance: "7km" },
];

export const connectivityImage: ConnectivityImage = {
  src: "https://images.pexels.com/photos/2387866/pexels-photo-2387866.jpeg?auto=compress&cs=tinysrgb&w=1600",
  alt: "Academy view",
};

export const connectivityPanelGradient: PanelGradient = {
  from: "#0B3D47",
  to: "#7FAE2A",
};
