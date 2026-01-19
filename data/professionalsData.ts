import { ProfessionalCard } from "../types/professionals";

export const professionalsCards: ProfessionalCard[] = [
  {
    title: "Craig Tiley",
    subtitle: "CEO Tennis Australia & Australian Open",
    image:
      "https://images.pexels.com/photos/573922/pexels-photo-573922.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    title: "Stephen Farrow",
    subtitle: "Director - Tournament, Players & International Relations",
    image:
      "https://images.pexels.com/photos/8224069/pexels-photo-8224069.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    title: "Cameron Pearson",
    subtitle: "Head Major Events - Tennis Australia",
    image:
      "https://images.pexels.com/photos/2387866/pexels-photo-2387866.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
];

export const professionalsSectionInfo = {
  heading: "Meet our professionals",
  description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  buttonText: "View All",
  onButtonClick: () => window.alert("Button clicked!"),
};
