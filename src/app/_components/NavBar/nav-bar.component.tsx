"use client";
import styles from "./nav-bar.module.scss";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { NavMobile } from "../navMobile/NavMobile";
import { GoPerson } from "react-icons/go";
import Image from "next/image";
import { useEffect, useState } from "react";

const NavBar = () => {
  const [locale, setLocale]: any = useState("");

  useEffect(() => {
    setLocale(localStorage.getItem("locale") || "ru");
  }, []);
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
          {locale && (
            <select name="languages" id="language-select" defaultValue={locale}>
              <option
                key={1}
                value="ru"
                onClick={(e: any) => {
                  localStorage.setItem("locale", e.target.value);
                  window.location.href = window.location.href;
                }}
              >
                РУ
              </option>
              <option
                key={2}
                value="kz"
                onClick={(e: any) => {
                  localStorage.setItem("locale", e.target.value);
                  window.location.href = window.location.href;
                }}
              >
                ҚЗ
              </option>
              <option
                key={3}
                value="en"
                onClick={(e: any) => {
                  localStorage.setItem("locale", e.target.value);
                  window.location.href = window.location.href;
                }}
              >
                EN
              </option>
            </select>
          )}
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
