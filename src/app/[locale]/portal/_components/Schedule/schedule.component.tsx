import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import styles from "./schedule.module.scss";
import { IoMdDownload } from "react-icons/io";

const Schedule = () => {
  const handleTranslateDay = (day: string) => {
    switch (day) {
      case "Monday":
        return "Понедельник";
      case "Tuesday":
        return "Вторник";
      case "Wednesday":
        return "Среда";
      case "Thursday":
        return "Четверг";
      case "Friday":
        return "Пятница";
      case "Saturday":
        return "Суббота";
      case "Sunday":
        return "Воскресенье";
      default:
        return "Понедельник";
    }
  };
  const quarters = [
    {
      id: 2,
      name: "Зима 2025",
      start: "2025/01/01",
      end: "2025/03/01",
      schedule: {
        Monday: {
          subjects: [
            {
              name: "География",
              time: "8:00 - 9:00",
              teacher: "Гульнур Сериковна",
              cabinet: "Кабинет 1",
            },
            {
              name: "Математика",
              time: "9:00 - 10:00",
              teacher: "Астам Ибраев",
              cabinet: "Кабинет 2",
            },
            {
              name: "Физика",
              time: "10:00 - 11:00",
              teacher: "Айдос Сериков",
              cabinet: "Кабинет 3",
            },
            {
              name: "Химия",
              time: "11:00 - 12:00",
              teacher: "Айдос Сериков",
              cabinet: "Кабинет 4",
            },
            {
              name: "Биология",
              time: "12:00 - 13:00",
              teacher: "Айдос Сериков",
              cabinet: "Кабинет 5",
            },
            {
              name: "История",
              time: "13:00 - 14:00",
              teacher: "Айдос Сериков",
              cabinet: "Кабинет 6",
            },
          ],
        },
        Tuesday: {
          subjects: [
            {
              name: "География",
              time: "8:00 - 9:00",
              teacher: "Гульнур Сериковна",
              cabinet: "Кабинет 1",
            },
            {
              name: "Математика",
              time: "9:00 - 10:00",
              teacher: "Астам Ибраев",
              cabinet: "Кабинет 2",
            },
            {
              name: "Физика",
              time: "10:00 - 11:00",
              teacher: "Айдос Сериков",
              cabinet: "Кабинет 3",
            },
            {
              name: "Химия",
              time: "11:00 - 12:00",
              teacher: "Айдос Сериков",
              cabinet: "Кабинет 4",
            },
            {
              name: "Биология",
              time: "12:00 - 13:00",
              teacher: "Айдос Сериков",
              cabinet: "Кабинет 5",
            },
            {
              name: "История",
              time: "13:00 - 14:00",
              teacher: "Айдос Сериков",
              cabinet: "Кабинет 6",
            },
          ],
        },
        Wednesday: {
          subjects: [
            {
              name: "География",
              time: "8:00 - 9:00",
              teacher: "Гульнур Сериковна",
              cabinet: "Кабинет 1",
            },
            {
              name: "Математика",
              time: "9:00 - 10:00",
              teacher: "Астам Ибраев",
              cabinet: "Кабинет 2",
            },
            {
              name: "Физика",
              time: "10:00 - 11:00",
              teacher: "Айдос Сериков",
              cabinet: "Кабинет 3",
            },
            {
              name: "Химия",
              time: "11:00 - 12:00",
              teacher: "Айдос Сериков",
              cabinet: "Кабинет 4",
            },
            {
              name: "Биология",
              time: "12:00 - 13:00",
              teacher: "Айдос Сериков",
              cabinet: "Кабинет 5",
            },
            {
              name: "История",
              time: "13:00 - 14:00",
              teacher: "Айдос Сериков",
              cabinet: "Кабинет 6",
            },
          ],
        },
        Thursday: {
          subjects: [
            {
              name: "География",
              time: "8:00 - 9:00",
              teacher: "Гульнур Сериковна",
              cabinet: "Кабинет 1",
            },
            {
              name: "Математика",
              time: "9:00 - 10:00",
              teacher: "Астам Ибраев",
              cabinet: "Кабинет 2",
            },
            {
              name: "Физика",
              time: "10:00 - 11:00",
              teacher: "Айдос Сериков",
              cabinet: "Кабинет 3",
            },
            {
              name: "Химия",
              time: "11:00 - 12:00",
              teacher: "Айдос Сериков",
              cabinet: "Кабинет 4",
            },
            {
              name: "Биология",
              time: "12:00 - 13:00",
              teacher: "Айдос Сериков",
              cabinet: "Кабинет 5",
            },
            {
              name: "История",
              time: "13:00 - 14:00",
              teacher: "Айдос Сериков",
              cabinet: "Кабинет 6",
            },
          ],
        },
        Friday: {
          subjects: [
            {
              name: "География",
              time: "8:00 - 9:00",
              teacher: "Гульнур Сериковна",
              cabinet: "Кабинет 1",
            },
            {
              name: "Математика",
              time: "9:00 - 10:00",
              teacher: "Астам Ибраев",
              cabinet: "Кабинет 2",
            },
            {
              name: "Физика",
              time: "10:00 - 11:00",
              teacher: "Айдос Сериков",
              cabinet: "Кабинет 3",
            },
            {
              name: "Химия",
              time: "11:00 - 12:00",
              teacher: "Айдос Сериков",
              cabinet: "Кабинет 4",
            },
            {
              name: "Биология",
              time: "12:00 - 13:00",
              teacher: "Айдос Сериков",
              cabinet: "Кабинет 5",
            },
            {
              name: "История",
              time: "13:00 - 14:00",
              teacher: "Айдос Сериков",
              cabinet: "Кабинет 6",
            },
          ],
        },
      },
    },
    {
      id: 1,
      name: "Осень 2024",
      start: "2024/09/01",
      end: "2024/12/01",
      schedule: {
        Monday: {
          subjects: [
            {
              name: "География",
              time: "8:00 - 9:00",
              teacher: "Гульнур Сериковна",
              cabinet: "Кабинет 1",
            },
            {
              name: "Математика",
              time: "9:00 - 10:00",
              teacher: "Астам Ибраев",
              cabinet: "Кабинет 2",
            },
            {
              name: "Физика",
              time: "10:00 - 11:00",
              teacher: "Айдос Сериков",
              cabinet: "Кабинет 3",
            },
            {
              name: "Химия",
              time: "11:00 - 12:00",
              teacher: "Айдос Сериков",
              cabinet: "Кабинет 4",
            },
            {
              name: "Биология",
              time: "12:00 - 13:00",
              teacher: "Айдос Сериков",
              cabinet: "Кабинет 5",
            },
            {
              name: "История",
              time: "13:00 - 14:00",
              teacher: "Айдос Сериков",
              cabinet: "Кабинет 6",
            },
          ],
        },
        Tuesday: {
          subjects: [
            {
              name: "География",
              time: "8:00 - 9:00",
              teacher: "Гульнур Сериковна",
              cabinet: "Кабинет 1",
            },
            {
              name: "Математика",
              time: "9:00 - 10:00",
              teacher: "Астам Ибраев",
              cabinet: "Кабинет 2",
            },
            {
              name: "Физика",
              time: "10:00 - 11:00",
              teacher: "Айдос Сериков",
              cabinet: "Кабинет 3",
            },
            {
              name: "Химия",
              time: "11:00 - 12:00",
              teacher: "Айдос Сериков",
              cabinet: "Кабинет 4",
            },
            {
              name: "Биология",
              time: "12:00 - 13:00",
              teacher: "Айдос Сериков",
              cabinet: "Кабинет 5",
            },
            {
              name: "История",
              time: "13:00 - 14:00",
              teacher: "Айдос Сериков",
              cabinet: "Кабинет 6",
            },
          ],
        },
        Wednesday: {
          subjects: [
            {
              name: "География",
              time: "8:00 - 9:00",
              teacher: "Гульнур Сериковна",
              cabinet: "Кабинет 1",
            },
            {
              name: "Математика",
              time: "9:00 - 10:00",
              teacher: "Астам Ибраев",
              cabinet: "Кабинет 2",
            },
            {
              name: "Физика",
              time: "10:00 - 11:00",
              teacher: "Айдос Сериков",
              cabinet: "Кабинет 3",
            },
            {
              name: "Химия",
              time: "11:00 - 12:00",
              teacher: "Айдос Сериков",
              cabinet: "Кабинет 4",
            },
            {
              name: "Биология",
              time: "12:00 - 13:00",
              teacher: "Айдос Сериков",
              cabinet: "Кабинет 5",
            },
            {
              name: "История",
              time: "13:00 - 14:00",
              teacher: "Айдос Сериков",
              cabinet: "Кабинет 6",
            },
          ],
        },
        Thursday: {
          subjects: [
            {
              name: "География",
              time: "8:00 - 9:00",
              teacher: "Гульнур Сериковна",
              cabinet: "Кабинет 1",
            },
            {
              name: "Математика",
              time: "9:00 - 10:00",
              teacher: "Астам Ибраев",
              cabinet: "Кабинет 2",
            },
            {
              name: "Физика",
              time: "10:00 - 11:00",
              teacher: "Айдос Сериков",
              cabinet: "Кабинет 3",
            },
            {
              name: "Химия",
              time: "11:00 - 12:00",
              teacher: "Айдос Сериков",
              cabinet: "Кабинет 4",
            },
            {
              name: "Биология",
              time: "12:00 - 13:00",
              teacher: "Айдос Сериков",
              cabinet: "Кабинет 5",
            },
            {
              name: "История",
              time: "13:00 - 14:00",
              teacher: "Айдос Сериков",
              cabinet: "Кабинет 6",
            },
          ],
        },
        Friday: {
          subjects: [
            {
              name: "География",
              time: "8:00 - 9:00",
              teacher: "Гульнур Сериковна",
              cabinet: "Кабинет 1",
            },
            {
              name: "Математика",
              time: "9:00 - 10:00",
              teacher: "Астам Ибраев",
              cabinet: "Кабинет 2",
            },
            {
              name: "Физика",
              time: "10:00 - 11:00",
              teacher: "Айдос Сериков",
              cabinet: "Кабинет 3",
            },
            {
              name: "Химия",
              time: "11:00 - 12:00",
              teacher: "Айдос Сериков",
              cabinet: "Кабинет 4",
            },
            {
              name: "Биология",
              time: "12:00 - 13:00",
              teacher: "Айдос Сериков",
              cabinet: "Кабинет 5",
            },
            {
              name: "История",
              time: "13:00 - 14:00",
              teacher: "Айдос Сериков",
              cabinet: "Кабинет 6",
            },
          ],
        },
      },
    },
  ];
  return (
    <div className={styles["schedule-container"]}>
      <div className={styles["schedule-container-cards"]}>
        {quarters.map((quarter: any, index) => (
          <div
            key={index + "quarter"}
            id={quarter.id + "quarterpdf"}
            className={styles["schedule-container-cards-card"]}
          >
            <div className={styles["schedule-container-cards-card-main-info"]}>
              <span
                className={
                  styles["schedule-container-cards-card-main-info-title"]
                }
              >
                {quarter.name}
              </span>
              <span
                className={
                  styles["schedule-container-cards-card-main-info-date"]
                }
              >
                {quarter.start} - {quarter.end}
                <IoMdDownload
                  size={20}
                  style={{
                    marginLeft: "10px",
                    cursor: "pointer",
                  }}
                />
              </span>
            </div>
            <div className={styles["schedule-container-cards-card-weekdays"]}>
              {Object.keys(quarter.schedule).map((day: any, index: any) => (
                <div
                  key={index + "day"}
                  className={
                    styles["schedule-container-cards-card-weekdays-day"]
                  }
                >
                  <span
                    className={
                      styles["schedule-container-cards-card-weekdays-day-title"]
                    }
                  >
                    {handleTranslateDay(day)}
                  </span>
                  <div
                    className={
                      styles[
                        "schedule-container-cards-card-weekdays-day-subjects"
                      ]
                    }
                  >
                    {quarter.schedule?.[day].subjects.map(
                      (subject: any, index: any) => (
                        <div
                          key={index + "subject"}
                          className={
                            styles[
                              "schedule-container-cards-card-weekdays-day-subjects-subject-info"
                            ]
                          }
                        >
                          <span
                            className={
                              styles[
                                "schedule-container-cards-card-weekdays-day-subjects-subject-info-title"
                              ]
                            }
                          >
                            {subject.name}
                          </span>
                          <span
                            className={
                              styles[
                                "schedule-container-cards-card-weekdays-day-subjects-subject-info-time"
                              ]
                            }
                          >
                            {subject.time}
                          </span>
                          <span
                            className={
                              styles[
                                "schedule-container-cards-card-weekdays-day-subjects-subject-info-teacher"
                              ]
                            }
                          >
                            {subject.teacher}
                          </span>
                          <span
                            className={
                              styles[
                                "schedule-container-cards-card-weekdays-day-subjects-subject-info-cabinet"
                              ]
                            }
                          >
                            {subject.cabinet}
                          </span>
                        </div>
                      )
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Schedule;
