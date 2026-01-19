export interface WeatherButton {
  text: string;
  onClick: () => void;
}

export interface WeatherInfo {
  label: string;
  location: string;
  temp: string;
  status: string;
  time: string;
  buttons: WeatherButton[];
}

export interface HeroBannerData {
  bgImage: string;
  topText: string;
  title: string;
  highlightTitle: string;
  tags: string[];
  buttonText: string;
  onButtonClick: string;
  weather: WeatherInfo;
}
