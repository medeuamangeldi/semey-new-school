import Card from "./_components/card.component";
import { quarters } from "./_helpers/mockData";
import styles from "./grades.module.scss";

const Grades = () => {
  return (
    <div className={styles["grades-container"]}>
      <div className={styles["grades-container-header"]}>
        <div className={styles["grades-container-header-title"]}>
          Мои оценки
        </div>
      </div>
      <div className={styles["grades-container-cards"]}>
        {quarters.map((quarter, index) => (
          <Card key={index + "quarter"} quarter={quarter} />
        ))}
      </div>
    </div>
  );
};

export default Grades;
