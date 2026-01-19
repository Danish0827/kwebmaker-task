import { TabsData, Tab } from "@/types/aboutTabs";

export const defaultTabs: Tab[] = [
  { key: "about", label: "About Us" },
  { key: "coaches", label: "Coaches" },
  { key: "vision", label: "Vision" },
  { key: "mission", label: "Mission" },
];

export const defaultTabsData: TabsData = {
  about: {
    heading: "About Us",
    description:
      "To be the first venue in the world to have <span>60 multi surface courts</span> at one location and establish first one stop tennis academy in the Asia Pacific producing grand slam champions.",
    stats: [
      { value: 20, label: "courts" },
      { value: 12, label: "coaches" },
      { value: 17, label: "years" },
      { value: 10, label: "clubs" },
    ],
    buttonText: "Read More",
    images: [
      { src: "https://images.pexels.com/photos/8224056/pexels-photo-8224056.jpeg?auto=compress&cs=tinysrgb&w=1200", alt: "Tennis training" },
      { src: "https://images.pexels.com/photos/8224057/pexels-photo-8224057.jpeg?auto=compress&cs=tinysrgb&w=1200", alt: "Kids tennis" },
      { src: "https://images.pexels.com/photos/8224037/pexels-photo-8224037.jpeg?auto=compress&cs=tinysrgb&w=1200", alt: "Tennis player" },
      { src: "https://images.pexels.com/photos/8224044/pexels-photo-8224044.jpeg?auto=compress&cs=tinysrgb&w=1200", alt: "Tennis woman" },
    ],
  },
  coaches: {
    heading: "Coaches",
    description:
      "Our coaching team includes experienced national-level trainers focused on discipline, technique, and growth across all skill levels.",
    stats: [
      { value: 30, label: "trainers" },
      { value: 8, label: "programs" },
      { value: 5, label: "levels" },
      { value: 24, label: "batches" },
    ],
    buttonText: "Meet Coaches",
    images: [
      { src: "https://images.pexels.com/photos/8224025/pexels-photo-8224025.jpeg?auto=compress&cs=tinysrgb&w=1200" },
      { src: "https://images.pexels.com/photos/8224011/pexels-photo-8224011.jpeg?auto=compress&cs=tinysrgb&w=1200" },
      { src: "https://images.pexels.com/photos/8224030/pexels-photo-8224030.jpeg?auto=compress&cs=tinysrgb&w=1200" },
      { src: "https://images.pexels.com/photos/8224040/pexels-photo-8224040.jpeg?auto=compress&cs=tinysrgb&w=1200" },
    ],
  },
  vision: {
    heading: "Vision",
    description:
      "To become the most trusted tennis ecosystem in Asia Pacific with state-of-the-art infrastructure and world-class mentoring.",
    stats: [
      { value: 60, label: "courts goal" },
      { value: 1000, label: "athletes" },
      { value: 12, label: "countries" },
      { value: 50, label: "events" },
    ],
    buttonText: "Explore Vision",
    images: [
      { src: "https://images.pexels.com/photos/8224062/pexels-photo-8224062.jpeg?auto=compress&cs=tinysrgb&w=1200" },
      { src: "https://images.pexels.com/photos/8224060/pexels-photo-8224060.jpeg?auto=compress&cs=tinysrgb&w=1200" },
      { src: "https://images.pexels.com/photos/8224052/pexels-photo-8224052.jpeg?auto=compress&cs=tinysrgb&w=1200" },
      { src: "https://images.pexels.com/photos/8224070/pexels-photo-8224070.jpeg?auto=compress&cs=tinysrgb&w=1200" },
    ],
  },
  mission: {
    heading: "Mission",
    description:
      "Build champions through high-performance training, elite coaching support, sports science, and international exposure.",
    stats: [
      { value: 4, label: "pillars" },
      { value: 365, label: "days plan" },
      { value: 18, label: "age groups" },
      { value: 1, label: "academy" },
    ],
    buttonText: "Our Mission",
    images: [
      { src: "https://images.pexels.com/photos/8224046/pexels-photo-8224046.jpeg?auto=compress&cs=tinysrgb&w=1200" },
      { src: "https://images.pexels.com/photos/8224024/pexels-photo-8224024.jpeg?auto=compress&cs=tinysrgb&w=1200" },
      { src: "https://images.pexels.com/photos/8224012/pexels-photo-8224012.jpeg?auto=compress&cs=tinysrgb&w=1200" },
      { src: "https://images.pexels.com/photos/8224014/pexels-photo-8224014.jpeg?auto=compress&cs=tinysrgb&w=1200" },
    ],
  },
};
