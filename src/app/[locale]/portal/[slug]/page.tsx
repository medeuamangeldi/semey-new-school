"use client";
import { useEffect } from "react";
import styles from "./page.module.scss";
import { useRouter } from "next/dist/client/router";
import { useParams } from "next/navigation";
import Schedule from "../_components/Schedule/schedule.component";
import Grades from "../_components/Grades/grades.component";
import Profile from "../_components/Profile/profile.component";

const Page = () => {
  const params = useParams();
  const { slug } = params;
  const handlePage = () => {
    switch (slug) {
      case "schedule":
        return <Schedule />;
      case "grades":
        return <Grades />;
      case "profile":
        return <Profile />;
      default:
        return <Schedule />;
    }
  };
  return handlePage();
};

export default Page;
