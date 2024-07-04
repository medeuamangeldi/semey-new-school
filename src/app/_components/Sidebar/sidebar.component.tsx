"use client";
import { usePathname, useRouter } from "@/navigation";
import styles from "./sidebar.module.scss";
import { GrScheduleNew, GrScorecard } from "react-icons/gr";
import { ImProfile } from "react-icons/im";
import { BiLogOut } from "react-icons/bi";
import { useState } from "react";
import clsx from "clsx";
import Spinner from "../Spinner/spinner.component";
import { useAppDispatch, useAppSelector } from "@/app/_store/hooks";
import { setIsLoading } from "@/app/_store/loader-slice";

const Sidebar = ({ children }: any) => {
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [clickedId, setClickedId] = useState(1);
  const isLoading = useAppSelector((state) => state.loader.isLoading);
  const handleClickedId = (id: number, to: string) => {
    setClickedId(id);
    dispatch(setIsLoading(true));
    setTimeout(() => {
      dispatch(setIsLoading(false));
      router.push(to);
    }, 700);
  };
  const linkItems = [
    {
      id: 1,
      name: "Мое расписание",
      icon: <GrScheduleNew />,
      to: "/portal",
    },
    {
      id: 2,
      name: "Мои оценки",
      icon: <GrScorecard />,
      to: "/portal",
    },
    {
      id: 3,
      name: "Мой профиль",
      icon: <ImProfile />,
      to: "/portal",
    },
    {
      id: 4,
      name: "Выйти",
      icon: <BiLogOut />,
      to: "/",
    },
  ];
  return (
    <div
      style={{
        display: pathname === "/portal" ? "flex" : "none",
      }}
      className={styles["container"]}
    >
      {isLoading && <Spinner />}
      <div className={styles["container-card"]}>
        <span className={styles["container-card-title"]}>Портал</span>
        <div className={styles["container-card-links"]}>
          {linkItems.map((item, index) => (
            <div
              key={index + "linkItem"}
              className={clsx(
                styles["container-card-links-item"],
                clickedId === item.id &&
                  styles["container-card-links-item-active"]
              )}
              onClick={() => handleClickedId(item.id, item.to)}
            >
              {item.icon}
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
      {children}
    </div>
  );
};

export default Sidebar;
