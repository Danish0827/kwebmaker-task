import { LeftSide, RightSide } from "../types/twoPromoBanner";

export const twoPromoBannerLeft: LeftSide = {
  title: "Our Coaches",
  description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  buttonText: "Read More",
  image: "https://images.pexels.com/photos/8224031/pexels-photo-8224031.jpeg?auto=compress&cs=tinysrgb&w=1400",
  onClick: () => alert("Left banner clicked"),
};

export const twoPromoBannerRight: RightSide = {
  title: "Events",
  description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  buttonText: "Read More",
  bgColor: "#97B81B",
  onClick: () => alert("Right banner clicked"),
};
