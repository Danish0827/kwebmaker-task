import { FooterProps } from "@/types/footer";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter, FaPhone, FaRegEnvelope } from "react-icons/fa6";
import { GoLocation } from "react-icons/go";

export const ContactIcons = {
  address: GoLocation,
  phone: FaPhone,
  email: FaRegEnvelope,
};

export const SocialIcons = {
  facebook: FaFacebookF,
  x: FaXTwitter,
  instagram: FaInstagram,
  youtube: FaYoutube,
};

export const footerData: FooterProps = {
  logoText: "SSA",
  tagline: "ADOPT NURTURE DELIVER",

  menuLinks: [
    { label: "About Us", href: "#" },
    { label: "Coaches", href: "#" },
    { label: "News", href: "#" },
    { label: "Matches", href: "#" },
    { label: "Events", href: "#" },
    { label: "FAQs", href: "#" },
    { label: "Programs", href: "#" },
    { label: "Amenities", href: "#" },
    { label: "Blogs", href: "#" },
  ],

  contactTitle: "Signature Slam Academy",

  contactItems: [
    { type: "address", text: "30 Wills Hill Road, Lovedale, NSW" },
    { type: "phone", text: "+91 5642589752", href: "tel:+915642589752" },
    { type: "email", text: "info@ssagroup.com", href: "mailto:info@ssagroup.com" },
  ],

  socialTitle: "Connect with us",

  socialLinks: [
    { type: "facebook", href: "#" },
    { type: "x", href: "#" },
    { type: "instagram", href: "#" },
    { type: "youtube", href: "#" },
  ],

  bottomLeftText: "Terms And Condition",
  bottomCenterText: "© 2023 All Rights Reserved www.signatureslamacademy.com",
  bottomRightText: "Privacy Policy",
  bottomLeftHref: "#",
  bottomRightHref: "#",
  accentColor: "#97B81B",
};