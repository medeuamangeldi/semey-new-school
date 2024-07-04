import styles from "./admin.module.scss";

const Admin = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["container-card"]}>
        <span className={styles["container-card-title"]}>Админ</span>
        <div>
          <span>Админ</span>
        </div>
      </div>
    </div>
  );
};

export default Admin;
