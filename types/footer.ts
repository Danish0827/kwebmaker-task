export type FooterLink = {
  label: string;
  href: string;
};

export type ContactItem = {
  type: "address" | "phone" | "email";
  text: string;
  href?: string;
};

export type SocialItem = {
  type: "facebook" | "x" | "instagram" | "youtube";
  href: string;
};

export type FooterProps = {
  logoText: string;
  tagline: string;
  menuLinks: FooterLink[];
  programLinks?: FooterLink[];
  contactTitle: string;
  contactItems: ContactItem[];
  socialTitle: string;
  socialLinks: SocialItem[];
  bottomLeftText: string;
  bottomCenterText: string;
  bottomRightText: string;
  bottomLeftHref?: string;
  bottomRightHref?: string;
  accentColor?: string;
};
