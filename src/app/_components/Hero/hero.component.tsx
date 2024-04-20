import clsx from "clsx";
import styles from "./hero.module.scss";
const Hero = () => {
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
      <div className={clsx(styles["hero-section-text"])}>Are You Ready?</div>
      <div className={clsx(styles["hero-section-text-sub"])}>
        Because this is a school like none other...
      </div>
    </div>
  );
};

export default Hero;
