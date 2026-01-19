import { HeroBannerData } from "@/types/heroBanner";

export const heroBannerData: HeroBannerData = {
  bgImage: "/banner.gif",
  topText: "SSA HUNTER VALLEY",
  title: "GROW YOUR GAME WITH THE",
  highlightTitle: "PROFESSIONALS",
  tags: ["ADOPT", "NURTURE", "DELIVER"],
  buttonText: "Register Now",
  onButtonClick: "#",
  weather: {
    label: "WEATHER",
    location: "Hunter Valley",
    temp: "19°C",
    status: "Weather",
    time: "Saturday, 8 pm",
    buttons: [
      { text: "Ongoing Matches", onClick: () => alert("Matches Clicked") },
      { text: "Score", onClick: () => alert("Score Clicked") },
    ],
  },
};
