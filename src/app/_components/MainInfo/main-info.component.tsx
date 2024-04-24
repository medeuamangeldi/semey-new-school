import { useRef } from "react";
import styles from "./main-info.module.scss";
import { useInView } from "framer-motion";
import Image from "next/image";
const MainInfo = () => {
  const myRef: any = useRef();
  const isInView = useInView(myRef, { once: false });
  return (
    <div className={styles["info-section"]}>
      <span
        ref={myRef}
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
        }}
        className={styles["info-section-title"]}
      >
        <span className={styles["info-section-title-sub"]}>BE</span> INSPIRED
      </span>

      <div className={styles["info-section-cards"]}>
        <div className={styles["info-section-cards-card"]}>
          <div className={styles["info-section-cards-card-text"]}>
            <span className={styles["info-section-cards-card-text-title"]}>
              Elevate your{" "}
              <span
                className={styles["info-section-cards-card-text-title-special"]}
              >
                Academic Potential
              </span>
            </span>
            <div className={styles["info-section-cards-card-text-body"]}>
              Talented teachers, high academic standards, and the development of
              leadership skills in a coed environment are the hallmarks of a
              Baylor School education.
            </div>
          </div>
          <Image
            src="/images/main_info_first.jpeg"
            width={880}
            height={660}
            alt="main_image_first"
            className={styles["info-section-cards-card-image"]}
          />
        </div>
      </div>
    </div>
  );
};

export default MainInfo;
