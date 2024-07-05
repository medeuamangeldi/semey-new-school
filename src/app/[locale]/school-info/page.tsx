import { mockData } from "./_helpers/mockData";
import styles from "./school-info.module.scss";

const SchoolInfo = () => {
  return (
    <div className={styles["school-info-container"]}>
      <div className={styles["school-info-container-header"]}>
        <span className={styles["school-info-container-header-title"]}>
          Информация о школе
        </span>
      </div>
      <div className={styles["school-info-container-table"]}>
        {mockData.map((data, index) => (
          <div
            key={index + "info"}
            className={styles["school-info-container-table-row"]}
          >
            <div className={styles["school-info-container-table-row-title"]}>
              {data.title}
            </div>
            <div className={styles["school-info-container-table-row-value"]}>
              {data.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SchoolInfo;
