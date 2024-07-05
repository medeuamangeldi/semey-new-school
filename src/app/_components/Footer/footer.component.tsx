"use client";
import { usePathname } from "@/navigation";
import styles from "./footer.module.scss";
const Footer = () => {
  const pathname = usePathname();
  if (pathname.includes("portal")) return;
  return (
    <footer className={styles["footer-container"]}>
      <p>© 2024 | SEMEY NEW SCHOOL | Все права защищены</p>
    </footer>
  );
};

export default Footer;
