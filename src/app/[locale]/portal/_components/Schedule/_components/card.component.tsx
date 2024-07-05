"use client";
import { IoMdDownload } from "react-icons/io";
import styles from "./card.module.scss";
import { useState } from "react";

const Card = ({ quarter }: any) => {
  const [isCardHidden, setIsCardHidden] = useState(true);
  const handleHideCard = () => {
    setIsCardHidden(!isCardHidden);
  };
  const handleTranslateDay = (day: string) => {
    switch (day) {
      case "Monday":
        return "Понедельник";
      case "Tuesday":
        return "Вторник";
      case "Wednesday":
        return "Среда";
      case "Thursday":
        return "Четверг";
      case "Friday":
        return "Пятница";
      case "Saturday":
        return "Суббота";
      case "Sunday":
        return "Воскресенье";
      default:
        return "Понедельник";
    }
  };
  return (
    <div className={styles["card"]}>
      <div
        className={styles["card-main-info"]}
        onClick={() => handleHideCard()}
      >
        <span className={styles["card-main-info-title"]}>{quarter.name}</span>
        <span className={styles["card-main-info-date"]}>
          {quarter.start} - {quarter.end}
          <IoMdDownload
            size={20}
            style={{
              marginLeft: "10px",
              cursor: "pointer",
            }}
          />
        </span>
      </div>
      <div
        style={{
          display: isCardHidden ? "none" : "flex",
        }}
        className={styles["card-weekdays"]}
      >
        {Object?.keys(quarter.schedule).map((day: any, index: any) => (
          <div key={index + "day"} className={styles["card-weekdays-day"]}>
            <span className={styles["card-weekdays-day-title"]}>
              {handleTranslateDay(day)}
            </span>
            <div className={styles["card-weekdays-day-subjects"]}>
              {quarter.schedule?.[day].subjects.map(
                (subject: any, index: any) => (
                  <div
                    key={index + "subject"}
                    className={
                      styles["card-weekdays-day-subjects-subject-info"]
                    }
                  >
                    <span
                      className={
                        styles["card-weekdays-day-subjects-subject-info-title"]
                      }
                    >
                      {subject.name}
                    </span>
                    <span
                      className={
                        styles["card-weekdays-day-subjects-subject-info-time"]
                      }
                    >
                      {subject.time}
                    </span>
                    <span
                      className={
                        styles[
                          "card-weekdays-day-subjects-subject-info-teacher"
                        ]
                      }
                    >
                      {subject.teacher}
                    </span>
                    <span
                      className={
                        styles[
                          "card-weekdays-day-subjects-subject-info-cabinet"
                        ]
                      }
                    >
                      {subject.cabinet}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
