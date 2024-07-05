import { BiHomeAlt2 } from "react-icons/bi";
import { IoDocumentsOutline, IoLibraryOutline } from "react-icons/io5";
import { GoGoal } from "react-icons/go";
import { FaPhoneVolume } from "react-icons/fa";
import { SiFuturelearn } from "react-icons/si";

export const routes = [
  {
    title: "homeRoute",
    href: "../",
    Icon: BiHomeAlt2,
  },
  {
    title: "missionRoute",
    href: "/mission",
    Icon: GoGoal,
  },
  {
    title: "schoolInfoRoute",
    href: "/school-info",
    Icon: IoDocumentsOutline,
  },
  {
    title: "eLibraryRoute",
    href: "/e-library",
    Icon: IoLibraryOutline,
  },
  {
    title: "forGraduatesRoute",
    href: "/for-graduates",
    Icon: SiFuturelearn,
  },
  {
    title: "contactUsRoute",
    href: "/contact-us",
    Icon: FaPhoneVolume,
  },
];
