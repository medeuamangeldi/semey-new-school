import { useRef } from "react";
import styles from "./main-info.module.scss";
import { useInView } from "framer-motion";

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
    </div>
  );
};

export default MainInfo;
