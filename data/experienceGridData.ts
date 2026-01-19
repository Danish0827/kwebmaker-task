import { ExperienceGridData } from "../types/experienceGrid";

export const experienceGridData: ExperienceGridData = {
  bg: { left: "#002F50", right: "#99B81B" },
  watermark: { enabled: true, text: "" },
  cards: [
    {
      id: 1,
      title: "Tennis",
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      image:
        "https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&cs=tinysrgb&w=1400",
      tags: ["9 Clay Courts", "4 Hard Courts"],
      onPlay: () => alert("Play Tennis"),
      textColor: "white",
    },
    {
      id: 2,
      title: "Accommodation",
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      image:
        "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1400",
      tags: ["5 Star Hotel"],
      onPlay: () => alert("Play Accommodation"),
      textColor: "black",
    },
    {
      id: 3,
      title: "Gym",
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      image:
        "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1400",
      tags: [],
      onPlay: () => alert("Play Gym"),
      textColor: "white",
    },
    {
      id: 4,
      title: "Resort",
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      image:
        "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1400",
      tags: [],
      onPlay: () => alert("Play Resort"),
      textColor: "black",
    },
  ],
};
