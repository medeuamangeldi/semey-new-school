import styles from "./mission.module.scss";
const Mission = () => {
  return (
    <div className={styles["mission-container"]}>
      <h1 className={styles["mission-container-title"]}>
        Our{" "}
        <span className={styles["mission-container-title-sub"]}>Mission</span>
      </h1>
      <hr />
      <div className={styles["mission-container-body"]}>
        <div className={styles["mission-container-body-item"]}>
          <h2 className={styles["mission-container-body-item-title"]}>
            Fostering Potential: Empowering Minds for a Changing World
          </h2>
          <p className={styles["mission-container-body-item-text"]}>
            Our school is committed to fostering a dynamic learning environment
            where every student is empowered to reach their fullest potential,
            cultivating critical thinking, creativity, and compassion to thrive
            in a rapidly changing world.{" "}
          </p>
        </div>
        <hr />
        <div className={styles["mission-container-body-item"]}>
          <h2 className={styles["mission-container-body-item-title"]}>
            Our Values
          </h2>
          <div className={styles["mission-container-body-item-text"]}>
            <ul className={styles["mission-container-body-item-text-list"]}>
              <li>
                <span
                  className={
                    styles["mission-container-body-item-text-list-item"]
                  }
                >
                  Excellence
                </span>
                : Striving for the highest standards of achievement in
                academics, character, and personal growth.
              </li>
              <li>
                <span
                  className={
                    styles["mission-container-body-item-text-list-item"]
                  }
                >
                  Inclusivity
                </span>
                : Embracing diversity and creating a welcoming environment where
                every individual feels valued and respected.
              </li>
              <li>
                <span
                  className={
                    styles["mission-container-body-item-text-list-item"]
                  }
                >
                  Integrity
                </span>
                : Upholding honesty, ethics, and moral principles in all actions
                and decisions.
              </li>
              <li>
                <span
                  className={
                    styles["mission-container-body-item-text-list-item"]
                  }
                >
                  Collaboration
                </span>
                : Encouraging teamwork and cooperation among students, staff,
                parents, and the wider community to achieve common goals.
              </li>
              <li>
                <span
                  className={
                    styles["mission-container-body-item-text-list-item"]
                  }
                >
                  Innovation
                </span>
                : Embracing creativity, curiosity, and adaptability to foster a
                culture of continuous improvement and exploration.
              </li>
              <li>
                <span
                  className={
                    styles["mission-container-body-item-text-list-item"]
                  }
                >
                  Resilience
                </span>
                : Cultivating perseverance, grit, and a positive mindset to
                overcome challenges and bounce back from setbacks.
              </li>
              <li>
                <span
                  className={
                    styles["mission-container-body-item-text-list-item"]
                  }
                >
                  Service
                </span>
                : Promoting a spirit of giving back and making a positive impact
                on the local and global community through acts of kindness and
                service.
              </li>
              <li>
                <span
                  className={
                    styles["mission-container-body-item-text-list-item"]
                  }
                >
                  Empowerment
                </span>
                : Providing opportunities for students to take ownership of
                their learning, make informed choices, and become leaders in
                their own right.
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className={styles["mission-container-body-item"]}>
          <h2 className={styles["mission-container-body-item-title"]}>
            Strategic Goals
          </h2>
          <p className={styles["mission-container-body-item-text"]}>
            To implement personalized learning initiatives that cater to diverse
            student needs, leveraging technology and innovative teaching
            methodologies to enhance student engagement, academic achievement,
            and overall well-being.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mission;
