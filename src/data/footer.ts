import { MapPin, Mail, Phone } from "lucide-react";
import { IconType } from "react-icons";
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

export interface AddressItem {
  icon: IconType | any;
  text: string;
}

export interface FooterLink {
  title: string;
  href: string;
}

export interface SocialLink {
  icon: IconType;
  href: string;
}

export const footerData = {
  logo: "/logo.png",
  qr: "/qr.png",

  disclaimer:
    "The information, plans, specifications, amenities, dimensions, pricing and availability presented on this website are indicative and may be revised subject to applicable approvals and laws. Images and visualisations are artistic representations intended for illustrative purposes only.",

  rera: "www.up-rera.in",

  addresses: [
    {
      icon: MapPin,
      text: "Near Hawa Hawai Restaurant, Chittora, Ghaziabad",
    },
    {
      icon: MapPin,
      text: "B-155, Sector 63, Noida U.P. - 201301 (Opp-Tech Mahindra)",
    },
    {
      icon: Mail,
      text: "kinzaindustrialestate@gmail.com",
    },
    {
      icon: Phone,
      text: "+91 9355455592",
    },
  ] as AddressItem[],

  links: [
    {
      title: "Overview",
      href: "#overview",
    },
    {
      title: "Amenities",
      href: "#amenities",
    },
    {
      title: "Highlights",
      href: "#highlights",
    },
    {
      title: "Location",
      href: "#location",
    },
    {
      title: "Plot Options",
      href: "#plots",
    },
  ] as FooterLink[],

  socials: [
    {
      icon: FaInstagram,
      href: "#",
    },
    {
      icon: FaFacebookF,
      href: "#",
    },
    {
      icon: FaYoutube,
      href: "#",
    },
    {
      icon: FaLinkedinIn,
      href: "#",
    },
    {
      icon: FaXTwitter,
      href: "#",
    },
  ] as SocialLink[],

  copyright:
    "© 2026 Highway Greens. All Rights Reserved. A Project by Kinza Estate. Digital Media Planned by Ritz Media World.",
};