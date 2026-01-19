export type ProgramCard = {
  title: string;
  subtitle: string;
  image: string;
};

export type ProgramsSectionProps = {
  heading: string;
  description: string;
  buttonText: string;
  onButtonClick?: () => void;
  cards: ProgramCard[];
};
