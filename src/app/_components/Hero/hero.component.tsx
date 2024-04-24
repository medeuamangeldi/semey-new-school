import clsx from "clsx";
import styles from "./hero.module.scss";
import { t } from "@/app/_helpers/translate";
import { useEffect, useState } from "react";
const Hero = () => {
  const [locale, setLocale] = useState("ru");
  useEffect(() => {
    setLocale(localStorage.getItem("locale") || "ru");
  }, []);
  return (
    <div className={styles["hero-section"]}>
      <div className={styles["hero-section-video-container"]}>
        <video
          autoPlay
          loop
          muted
          playsInline
          onContextMenu={() => {
            return false;
          }}
          preload="auto"
          id="video"
        >
          <source src="herovideo.mp4" type="video/mp4" />
        </video>
      </div>
      <div className={clsx(styles["hero-section-text"])}>
        {t("hero-title", locale)}
      </div>
    </div>
  );
};

export default Hero;
