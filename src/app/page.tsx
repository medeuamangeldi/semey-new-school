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

  const [bases, setBases]: any = useState([]);
  const [fileNames, setFilenames]: any = useState([]);

  const handleOnClick = async () => {
    await fetch("http://localhost:21754/api/sign", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        base64: bases,
      }),
    })
      .then(async (response) => {
        return await response.json();
      })
      .then((data) => {
        for (let index = 0; index < data.message.length; index++) {
          const linkSource = `data:application/cms;base64,${data.message[index]}`;
          const downloadLink = document.createElement("a");
          downloadLink.href = linkSource;
          downloadLink.download = `${fileNames[index]}.cms`;
          downloadLink.click();
        }
      });
  };

  const getBase64 = (file: any) => {
    return new Promise((resolve) => {
      let fileInfo;
      let baseURL = "";
      // Make new FileReader
      let reader = new FileReader();

      // Convert the file to base64 text
      reader.readAsDataURL(file);

      // on reader load somthing...
      reader.onload = () => {
        const baseURL = reader.result;
        resolve(baseURL);
      };
    });
  };

  const handleFileInputChange = (e: any) => {
    for (let index = 0; index < e.target.files.length; index++) {
      const file = e.target.files[index];

      getBase64(file)
        .then((result: any) => {
          file["base64"] = result;
          setFilenames((prev: any) => {
            const newArr = [...prev, file.name];
            console.log(newArr);
            return newArr;
          });
          setBases((prev: any) => {
            const newArr = [...prev, result.split(",")[1]];
            return newArr;
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <div>
      <main id="outer-container" className={styles["main"]}>
        <div className={styles["main-nav-container"]}>
          <div className={styles["main-nav-container-logo"]}>
            <Image src="/logo/sns_logo.jpg" width={70} height={70} alt="logo" />
          </div>
          <button onClick={handleOnClick}>request</button>
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
          <div>
            <input
              type="file"
              name="file"
              onChange={handleFileInputChange}
              multiple
            />
          </div>
          
        </div>
        <hr className={styles["hr"]} />
        <div ref={myRef} className={styles["main-info-section"]}>
          <span
            style={{
              transform: isInView ? "none" : "translateX(-200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
            }}
            className={styles["main-info-section-title"]}
          >
            BE INSPIRED
          </span>
        </div>
      </main>
      <SmoothScroll />
    </div>
  );
}
