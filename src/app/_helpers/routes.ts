import { BiHomeAlt2 } from "react-icons/bi";
import { IoDocumentsOutline, IoLibraryOutline } from "react-icons/io5";
import { GoGoal } from "react-icons/go";
import { FaPhoneVolume } from "react-icons/fa";
import { SiFuturelearn } from "react-icons/si";

export const routes = [
  {
    title: "Home",
    href: "/",
    Icon: BiHomeAlt2,
  },
  {
    title: "Mission",
    href: "/mission",
    Icon: GoGoal,
  },
  {
    title: "School Info",
    href: "/school-info",
    Icon: IoDocumentsOutline,
  },
  {
    title: "E-Library",
    href: "/e-library",
    Icon: IoLibraryOutline,
  },
  {
    title: "For Graduates",
    href: "/for-graduates",
    Icon: SiFuturelearn,
  },
  {
    title: "Contact Us",
    href: "/contact-us",
    Icon: FaPhoneVolume,
  },
];
