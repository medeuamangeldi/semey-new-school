/* eslint-disable react/no-unescaped-entities */
"use client";
import { useRef, useState } from "react";
import styles from "./main-info.module.scss";
import { useInView } from "framer-motion";
import Image from "next/image";
import clsx from "clsx";
import { t } from "../../_helpers/translate";
import { TbArrowBigDownLinesFilled } from "react-icons/tb";
const MainInfo = () => {
  const myRef: any = useRef();
  const isInView = useInView(myRef, { once: false });
  const [locale, setLocale]: any = useState("");
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
        <span className={styles["info-section-title-sub"]}>
          {t("movingTextOne", locale)}
        </span>{" "}
        {t("movingTextTwo", locale)}
      </span>

      <div className={styles["info-section-cards"]}>
        <div className={clsx(styles["info-section-cards-card"])}>
          <div className={styles["info-section-cards-card-text"]}>
            <span className={styles["info-section-cards-card-text-title"]}>
              {t("cardOneTitleOne", locale)}{" "}
              <span
                className={styles["info-section-cards-card-text-title-special"]}
              >
                {t("cardOneTitleTwo", locale)}
              </span>
            </span>
            <div className={styles["info-section-cards-card-text-body"]}>
              {t("cardOneText", locale)}
            </div>
          </div>
          <Image
            src="/images/main_info_first.jpeg"
            width={500}
            height={400}
            alt="main_image_first"
            className={styles["info-section-cards-card-image"]}
          />
        </div>
        <div style={{ color: "#7c1120" }}>
          <TbArrowBigDownLinesFilled />
        </div>
        <div
          className={clsx(
            styles["info-section-cards-card"],
            styles["info-section-cards-card-reverse"]
          )}
        >
          <div className={styles["info-section-cards-card-text"]}>
            <span className={styles["info-section-cards-card-text-title"]}>
              {t("cardTwoTitleOne", locale)}{" "}
              <span
                className={styles["info-section-cards-card-text-title-special"]}
              >
                {t("cardTwoTitleTwo", locale)}
              </span>
            </span>
            <div className={styles["info-section-cards-card-text-body"]}>
              {t("cardTwoText", locale)}
            </div>
          </div>
          <Image
            src="/images/main_info_second.jpeg"
            width={500}
            height={400}
            alt="main_image_second"
            className={clsx(
              styles["info-section-cards-card-image"],
              styles["info-section-cards-card-reverse-image"]
            )}
          />
        </div>
        <div style={{ color: "#7c1120" }}>
          <TbArrowBigDownLinesFilled />
        </div>
        <div className={clsx(styles["info-section-cards-card"])}>
          <div className={styles["info-section-cards-card-text"]}>
            <span className={styles["info-section-cards-card-text-title"]}>
              {t("cardThreeTitleOne", locale)}{" "}
              <span
                className={styles["info-section-cards-card-text-title-special"]}
              >
                {t("cardThreeTitleTwo", locale)}
              </span>
            </span>
            <div className={styles["info-section-cards-card-text-body"]}>
              {t("cardThreeText", locale)}
            </div>
          </div>
          <Image
            src="/images/main_info_third.jpeg"
            width={500}
            height={400}
            alt="main_image_third"
            className={clsx(styles["info-section-cards-card-image"])}
          />
        </div>
        <div style={{ color: "#7c1120" }}>
          <TbArrowBigDownLinesFilled />
        </div>
        <div
          className={clsx(
            styles["info-section-cards-card"],
            styles["info-section-cards-card-reverse"]
          )}
        >
          <div className={styles["info-section-cards-card-text"]}>
            <span className={styles["info-section-cards-card-text-title"]}>
              {t("cardFourTitleOne", locale)}{" "}
              <span
                className={styles["info-section-cards-card-text-title-special"]}
              >
                {t("cardFourTitleTwo", locale)}
              </span>
            </span>
            <div className={styles["info-section-cards-card-text-body"]}>
              {t("cardFourText", locale)}
            </div>
          </div>
          <Image
            src="/images/main_info_fourth.jpeg"
            width={500}
            height={400}
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
