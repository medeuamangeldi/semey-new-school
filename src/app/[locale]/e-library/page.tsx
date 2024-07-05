import { mockData } from "./_helpers/mockData";
import styles from "./e-library.module.scss";
import Image from "next/image";
const ELibrary = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["container-header"]}>
        <div className={styles["container-header-title"]}>
          Электронная библиотека
        </div>
      </div>
      <div className={styles["container-content"]}>
        <div className={styles["container-content-search"]}>
          {" "}
          <input
            placeholder="Поиск..."
            className={styles["container-content-search-input"]}
          />
          <div className={styles["container-content-search-button"]}>Найти</div>
        </div>
        <div className={styles["container-content-cards"]}>
          {mockData.map((data, index) => (
            <div
              key={index + "card"}
              className={styles["container-content-cards-card"]}
            >
              <Image
                className={styles["container-content-cards-card-image"]}
                src={data.image}
                alt="book"
                width={100}
                height={100}
              />
              <div className={styles["container-content-cards-card-name"]}>
                {data.title}
              </div>
              <div className={styles["container-content-cards-card-grade"]}>
                {data.grade} класс
              </div>
              <div className={styles["container-content-cards-card-author"]}>
                Автор: {data.author}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ELibrary;
