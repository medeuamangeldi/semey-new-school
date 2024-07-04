import styles from "./teacher.module.scss";

const Teacher = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["container-card"]}>
        <span className={styles["container-card-title"]}>Преподаватель</span>
        <div>
          <span>Преподаватель</span>
        </div>
      </div>
    </div>
  );
};

export default Teacher;
