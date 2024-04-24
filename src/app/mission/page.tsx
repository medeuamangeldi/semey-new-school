import styles from "./mission.module.scss";
const Mission = () => {
  return (
    <div className={styles["mission-container"]}>
      <h1 className={styles["mission-container-title"]}>
        Our{" "}
        <span className={styles["mission-container-title-sub"]}>Mission</span>
      </h1>
      <hr />
    </div>
  );
};

export default Mission;
