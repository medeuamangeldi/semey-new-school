import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import styles from "./schedule.module.scss";
import { IoMdDownload } from "react-icons/io";
import Card from "./_components/card.component";
import { quarters } from "./_helpers/mockData";

const Schedule = () => {
  return (
    <div className={styles["schedule-container"]}>
      <div className={styles["schedule-container-header"]}>
        <div className={styles["schedule-container-header-title"]}>
          Моё расписание
        </div>
      </div>
      <div className={styles["schedule-container-cards"]}>
        {quarters.map((quarter: any, index) => (
          <Card key={index + "quarter"} quarter={quarter} />
        ))}
      </div>
    </div>
  );
};

export default Schedule;
