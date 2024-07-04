import styles from "./student.module.scss";

const Student = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["container-card"]}>
        <span className={styles["container-card-title"]}>Студент</span>
        <div>
          <span>Студент</span>
        </div>
      </div>
    </div>
  );
};

export default Student;
