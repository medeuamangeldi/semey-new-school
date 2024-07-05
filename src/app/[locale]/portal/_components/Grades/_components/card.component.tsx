"use client";
import { useState } from "react";
import styles from "./card.module.scss";

const Card = ({ quarter }: any) => {
  const [isCardHidden, setIsCardHidden] = useState(true);
  const handleHideCard = () => {
    setIsCardHidden(!isCardHidden);
  };
  return (
    <div className={styles["card"]}>
      <div className={styles["card-header"]} onClick={() => handleHideCard()}>
        <div className={styles["card-header-title"]}>{quarter.title}</div>
        <div className={styles["card-header-period"]}>{quarter.period}</div>
      </div>
      <div
        style={{
          display: isCardHidden ? "none" : "flex",
        }}
        className={styles["card-header-names"]}
      >
        <span className={styles["card-header-names-name"]}>Предмет</span>
        <span className={styles["card-header-names-name"]}>
          Промежуточные оценки
        </span>
        <span className={styles["card-header-names-name"]}>Пропуски</span>
        <span className={styles["card-header-names-name"]}>
          Итоговая оценка
        </span>
      </div>
      <div
        style={{
          display: isCardHidden ? "none" : "flex",
        }}
        className={styles["card-subjects"]}
      >
        {quarter.grades.map((grade: any, index: any) => (
          <div
            key={index + "gradequarter"}
            className={styles["card-subjects-subject"]}
          >
            <div className={styles["card-subjects-subject-title"]}>
              {grade.subject}
            </div>
            <div className={styles["card-subjects-subject-grades"]}>
              {grade.grades.map((grade: any, index: any) => (
                <div
                  key={index + "grade"}
                  className={styles["card-subjects-subject-grades-grade"]}
                >
                  {grade}
                </div>
              ))}
            </div>
            <div className={styles["card-subjects-subject-absence"]}>
              {grade.absence}
            </div>
            <div className={styles["card-subjects-subject-final"]}>
              {grade.finalQuarterGrade}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
