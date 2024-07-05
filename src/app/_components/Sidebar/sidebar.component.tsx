"use client";
import { usePathname, useRouter } from "@/navigation";
import styles from "./sidebar.module.scss";
import { GrScheduleNew, GrScorecard } from "react-icons/gr";
import { ImProfile } from "react-icons/im";
import { BiLogOut } from "react-icons/bi";
import { useEffect, useState } from "react";
import clsx from "clsx";
import Spinner from "../Spinner/spinner.component";
import { useAppDispatch, useAppSelector } from "@/app/_store/hooks";
import { setIsLoading } from "@/app/_store/loader-slice";
import { useParams } from "next/navigation";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import Image from "next/image";

const Sidebar = ({ children }: any) => {
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const router = useRouter();
  const params = useParams();
  const { slug }: any = params;
  const [chosenCode, setChosenCode]: any = useState("");
  const isLoading = useAppSelector((state) => state.loader.isLoading);
  const [isHidden, setIsHidden] = useState(false);
  const handleArrowClick = () => {
    setIsHidden(!isHidden);
  };
  const isNeededToDisplay = () => {
    return pathname.includes("portal");
  };
  const handleClickedId = (id: number, to: string, code: string) => {
    setChosenCode(code);
    dispatch(setIsLoading(true));
    setTimeout(() => {
      dispatch(setIsLoading(false));
      router.push(to);
    }, 700);
  };
  const linkItems = [
    {
      id: 1,
      name: "Расписание",
      icon: <GrScheduleNew size={25} />,
      to: "/portal/schedule",
      code: "schedule",
    },
    {
      id: 2,
      name: "Оценки",
      icon: <GrScorecard size={25} />,
      to: "/portal/grades",
      code: "grades",
    },
    {
      id: 3,
      name: "Профиль",
      icon: <ImProfile size={25} />,
      to: "/portal/profile",
      code: "profile",
    },
    {
      id: 4,
      name: "Выйти",
      icon: <BiLogOut size={25} />,
      to: "/",
      code: "logout",
    },
  ];

  useEffect(() => {
    if (slug) {
      setChosenCode(slug);
    }
  }, [slug]);
  return (
    <div
      style={{
        display: isNeededToDisplay() ? "flex" : "none",
      }}
      className={styles["container"]}
    >
      {isLoading && <Spinner />}
      <div className={styles["container-card"]}>
        <span className={styles["container-card-title"]}>{/* Портал */}</span>
        <div className={styles["container-card-links"]}>
          {linkItems.map((item, index) => (
            <div
              key={index + "linkItem"}
              className={clsx(
                styles["container-card-links-item"],
                chosenCode === item.code &&
                  styles["container-card-links-item-active"]
              )}
              onClick={() => handleClickedId(item.id, item.to, item.code)}
            >
              {item.icon}
              <span
                style={{
                  display: isHidden ? "none" : "block",
                }}
              >
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
      <Image
        src="/icons/left-arrow.svg"
        width={60}
        height={60}
        alt="logo"
        className={styles["hide-button"]}
        style={{
          transform: isHidden ? "rotate(180deg)" : "rotate(0deg)",
        }}
        onClick={() => handleArrowClick()}
      />

      <div
        style={{
          width: "100%",
          //   display: "flex",
          height: "100%",
          overflowY: "auto",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Sidebar;
