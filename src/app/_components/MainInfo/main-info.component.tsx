/* eslint-disable react/no-unescaped-entities */
import { useRef } from "react";
import styles from "./main-info.module.scss";
import { useInView } from "framer-motion";
import Image from "next/image";
import clsx from "clsx";
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
        <div className={clsx(styles["info-section-cards-card"])}>
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
        <div
          className={clsx(
            styles["info-section-cards-card"],
            styles["info-section-cards-card-reverse"]
          )}
        >
          <div className={styles["info-section-cards-card-text"]}>
            <span className={styles["info-section-cards-card-text-title"]}>
              Leading{" "}
              <span
                className={styles["info-section-cards-card-text-title-special"]}
              >
                Faculty
              </span>
            </span>
            <div className={styles["info-section-cards-card-text-body"]}>
              SNS's diverse faculty are leaders in their field - and committed
              to the school’s mission to make a positive difference in the
              world. Devoted to their craft they guide students to think beyond
              the simple answers – preparing them for college and the workplace
              beyond.
            </div>
          </div>
          <Image
            src="/images/main_info_second.jpeg"
            width={880}
            height={660}
            alt="main_image_second"
            className={clsx(
              styles["info-section-cards-card-image"],
              styles["info-section-cards-card-reverse-image"]
            )}
          />
        </div>
        <div className={clsx(styles["info-section-cards-card"])}>
          <div className={styles["info-section-cards-card-text"]}>
            <span className={styles["info-section-cards-card-text-title"]}>
              Leading{" "}
              <span
                className={styles["info-section-cards-card-text-title-special"]}
              >
                Facilities
              </span>
            </span>
            <div className={styles["info-section-cards-card-text-body"]}>
              Over the years SNS has invested in a 24/7 learning and living
              community that includes an expansive new academic building and
              renovations to dorms, the library, dining hall, and athletic
              facilities.
            </div>
          </div>
          <Image
            src="/images/main_info_third.jpeg"
            width={880}
            height={660}
            alt="main_image_third"
            className={clsx(styles["info-section-cards-card-image"])}
          />
        </div>
        <div
          className={clsx(
            styles["info-section-cards-card"],
            styles["info-section-cards-card-reverse"]
          )}
        >
          <div className={styles["info-section-cards-card-text"]}>
            <span className={styles["info-section-cards-card-text-title"]}>
              Leading{" "}
              <span
                className={styles["info-section-cards-card-text-title-special"]}
              >
                Opportunities
              </span>
            </span>
            <div className={styles["info-section-cards-card-text-body"]}>
              SNS leads the way in providing opportunities that allow for the
              discovery of new interests or a deeper immersion into long-held
              passions. Faculty, coaches, dorm parents, deans, and advisors work
              closely with students to guide their experiences.
            </div>
          </div>
          <Image
            src="/images/main_info_fourth.jpeg"
            width={880}
            height={660}
            alt="main_image_fourth"
            className={clsx(
              styles["info-section-cards-card-image"],
              styles["info-section-cards-card-reverse-image"]
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default MainInfo;
