"use client";
import styles from "./page.module.scss";
import Hero from "./_components/Hero/hero.component";
import MainInfo from "./_components/MainInfo/main-info.component";
export default function Home() {
  return (
    <div>
      <main id="outer-container" className={styles["main"]}>
        <Hero />
        <hr />
        <MainInfo />
        <hr />
      </main>
    </div>
  );
}
