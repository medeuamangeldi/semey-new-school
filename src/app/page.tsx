"use client";
import styles from "./page.module.scss";
import { NavMobile } from "./_components/navMobile/NavMobile";
import Image from "next/image";
import { GoPerson } from "react-icons/go";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { AnimatePresence, motion, useInView } from "framer-motion";
import SmoothScroll from "./_components/smoothScroll/SmoothScroll";
export default function Home() {
  const [startAnimation, setStartAnimation] = useState(false);
  const [transitionProperties, setTransitionProperties]: any = useState();
  const myRef: any = useRef();
  const isInView = useInView(myRef, { once: false });

  const handleOnClick = () => {
    fetch("http://localhost:8000/api/sign", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        base64: "Ubyy3sMHmLFV1wd9gbebKw==",
      }),
    });
  };
  return (
    <>
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
              <div
                className={styles["main-nav-container-right-my-subcontainer"]}
              >
                <div className={styles["main-nav-container-right-my-text"]}>
                  MY
                  <span
                    className={
                      styles["main-nav-container-right-my-text-colored"]
                    }
                  >
                    SNS
                  </span>
                </div>
                <div
                  className={
                    styles["main-nav-container-right-my-subcontainer-arrow"]
                  }
                >
                  <IoIosArrowDroprightCircle />
                </div>
              </div>
            </div>
            <div className={styles["main-nav-container-right-divider"]}></div>
            <NavMobile />
          </div>
        </div>
        <div className={styles["main-hero-section"]}>
          <div className={styles["main-hero-section-video-container"]}>
            <video autoPlay muted loop id="video">
              <source
                src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                type="video/mp4"
              />
            </video>
          </div>
          <div className={clsx(styles["main-hero-section-text"])}>
            Are You Ready?
          </div>
          <div className={clsx(styles["main-hero-section-text-sub"])}>
            Because this is a school like none other...
          </div>
          <button onClick={handleOnClick}>request</button>
        </div>
        <hr className={styles["hr"]} />
        <div ref={myRef} className={styles["main-info-section"]}>
          <span
            style={{
              transform: isInView ? "none" : "translateX(-200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
            className={styles["main-info-section-title"]}
          >
            BE INSPIRED
          </span>
        </div>
      </main>
      <SmoothScroll />
    </>
  );
}
