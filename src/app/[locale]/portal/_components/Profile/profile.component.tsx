import { FaRegEdit } from "react-icons/fa";
import styles from "./profile.module.scss";

const Profile = () => {
  return (
    <div className={styles["profile-container"]}>
      <div className={styles["profile-container-header"]}>
        <div className={styles["profile-container-header-title"]}>
          Мой профиль
        </div>
      </div>
      <div className={styles["profile-container-card"]}>
        <div className={styles["profile-container-card-name"]}>
          {" "}
          <span className={styles["profile-container-card-name-full"]}>
            Саина Алина
          </span>
          <div className={styles["profile-container-card-name-buttons"]}>
            <div className={styles["profile-container-card-name-buttons-edit"]}>
              <FaRegEdit />
              Редактировать
            </div>
          </div>
        </div>
        <div className={styles["profile-container-card-info"]}>
          <div className={styles["profile-container-card-info-row"]}>
            <div className={styles["profile-container-card-info-row-label"]}>
              Номер телефона:
            </div>
            <div className={styles["profile-container-card-info-row-value"]}>
              +7 777 777 77 77
            </div>
          </div>
          <div className={styles["profile-container-card-info-row"]}>
            <div className={styles["profile-container-card-info-row-label"]}>
              Email:
            </div>
            <div className={styles["profile-container-card-info-row-value"]}>
              alinasaina@gmail.com
            </div>
          </div>
          <div className={styles["profile-container-card-info-row"]}>
            <div className={styles["profile-container-card-info-row-label"]}>
              Класс:
            </div>
            <div className={styles["profile-container-card-info-row-value"]}>
              9 A
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
