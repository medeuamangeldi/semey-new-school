"use client";
import styles from "./nav-bar.module.scss";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { NavMobile } from "../navMobile/NavMobile";
import { GoPerson } from "react-icons/go";
import Image from "next/image";

const NavBar = () => {
  return (
    <div className={styles["nav-container"]}>
      <div
        className={styles["nav-container-logo"]}
        onClick={() => (window.location.href = "/")}
      >
        <Image src="/logo/sns_logo.jpg" width={70} height={70} alt="logo" />
      </div>
      <div className={styles["nav-container-right"]}>
        <div className={styles["nav-container-right-my"]}>
          <div className={styles["nav-container-right-my-icon"]}>
            <GoPerson />
          </div>
          <div className={styles["nav-container-right-my-subcontainer"]}>
            <div className={styles["nav-container-right-my-text"]}>
              MY
              <span className={styles["nav-container-right-my-text-colored"]}>
                SNS
              </span>
            </div>
            <div
              className={styles["nav-container-right-my-subcontainer-arrow"]}
            >
              <IoIosArrowDroprightCircle />
            </div>
          </div>
        </div>
        <div className={styles["nav-container-right-divider"]}></div>
        <NavMobile />
      </div>
    </div>
  );
};

export default NavBar;
