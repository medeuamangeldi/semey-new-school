"use client";
import { useState } from "react";
import { t } from "../_helpers/translate";
import styles from "./mission.module.scss";
const Mission = () => {
  const [locale, setLocale]: any = useState("");
  return (
    <div className={styles["mission-container"]}>
      <h1 className={styles["mission-container-title"]}>
        {t("ourMissionTitleOne", locale)}{" "}
        <span className={styles["mission-container-title-sub"]}>
          {t("ourMissionTitleTwo", locale)}
        </span>
      </h1>
      <hr />
      <div className={styles["mission-container-body"]}>
        <div className={styles["mission-container-body-item"]}>
          <h2 className={styles["mission-container-body-item-title"]}>
            {t("ourMissionOneTitle", locale)}
          </h2>
          <p className={styles["mission-container-body-item-text"]}>
            {t("ourMissionOneText", locale)}
          </p>
        </div>
        <hr />
        <div className={styles["mission-container-body-item"]}>
          <h2 className={styles["mission-container-body-item-title"]}>
            {t("ourMissionTwoTitle", locale)}
          </h2>
          <div className={styles["mission-container-body-item-text"]}>
            <ul className={styles["mission-container-body-item-text-list"]}>
              <li>
                <span
                  className={
                    styles["mission-container-body-item-text-list-item"]
                  }
                >
                  {t("ourMissionTwoTextFirst", locale)}
                </span>
                : {t("ourMissionTwoTextFirstDesc", locale)}
              </li>
              <li>
                <span
                  className={
                    styles["mission-container-body-item-text-list-item"]
                  }
                >
                  {t("ourMissionTwoTextSecond", locale)}
                </span>
                : {t("ourMissionTwoTextSecondDesc", locale)}
              </li>
              <li>
                <span
                  className={
                    styles["mission-container-body-item-text-list-item"]
                  }
                >
                  {t("ourMissionTwoTextThird", locale)}
                </span>
                : {t("ourMissionTwoTextThirdDesc", locale)}
              </li>
              <li>
                <span
                  className={
                    styles["mission-container-body-item-text-list-item"]
                  }
                >
                  {t("ourMissionTwoTextFourth", locale)}
                </span>
                : {t("ourMissionTwoTextFourthDesc", locale)}
              </li>
              <li>
                <span
                  className={
                    styles["mission-container-body-item-text-list-item"]
                  }
                >
                  {t("ourMissionTwoTextFifth", locale)}
                </span>
                : {t("ourMissionTwoTextFifthDesc", locale)}
              </li>
              <li>
                <span
                  className={
                    styles["mission-container-body-item-text-list-item"]
                  }
                >
                  {t("ourMissionTwoTextSixth", locale)}
                </span>
                : {t("ourMissionTwoTextSixthDesc", locale)}
              </li>
              <li>
                <span
                  className={
                    styles["mission-container-body-item-text-list-item"]
                  }
                >
                  {t("ourMissionTwoTextSeventh", locale)}
                </span>
                : {t("ourMissionTwoTextSeventhDesc", locale)}
              </li>
              <li>
                <span
                  className={
                    styles["mission-container-body-item-text-list-item"]
                  }
                >
                  {t("ourMissionTwoTextEighth", locale)}
                </span>
                : {t("ourMissionTwoTextEighthDesc", locale)}
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className={styles["mission-container-body-item"]}>
          <h2 className={styles["mission-container-body-item-title"]}>
            {t("ourMissionThreeTitle", locale)}
          </h2>
          <p className={styles["mission-container-body-item-text"]}>
            {t("ourMissionThreeText", locale)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mission;
