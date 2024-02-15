"use client";
import styles from "./page.module.scss";
import { NavMobile } from "./_components/navMobile/NavMobile";
import Image from "next/image";
import { GoPerson } from "react-icons/go";

export default function Home() {
  return (
    <main id="outer-container" className={styles["main"]}>
      <div className={styles["main-nav-container"]}>
        <div className={styles["main-nav-container-logo"]}>
          <Image src="/logo/sns_logo.jpg" width={70} height={70} alt="logo" />
        </div>
        <div className={styles["main-nav-container-right"]}>
          <div className={styles["main-nav-container-right-my"]}>
            <div className={styles["main-nav-container-right-my-icon"]}>
              <GoPerson />
            </div>
            <div className={styles["main-nav-container-right-my-text"]}>
              MY
              <span className={styles["main-nav-container-right-my-text-colored"]}>
                SNS
              </span>
            </div>
          </div>
          <div className={styles["main-nav-container-right-divider"]}></div>
          <NavMobile />
        </div>
      </div>
    </main>
  );
}
