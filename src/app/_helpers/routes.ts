import { BiHomeAlt2 } from "react-icons/bi";
import { IoDocumentsOutline, IoLibraryOutline } from "react-icons/io5";
import { GrGallery } from "react-icons/gr";
import { TiInfoLargeOutline } from "react-icons/ti";

export const routes = [
  {
    title: "Home",
    href: "/",
    Icon: BiHomeAlt2,
  },
  {
    title: "Gallery",
    href: "#",
    Icon: GrGallery,
  },
  {
    title: "Regulations",
    href: "#",
    Icon: IoDocumentsOutline,
  },
  {
    title: "School Library",
    href: "#",
    Icon: IoLibraryOutline,
  },
  {
    title: "About Us",
    href: "#",
    Icon: TiInfoLargeOutline,
  },
];
