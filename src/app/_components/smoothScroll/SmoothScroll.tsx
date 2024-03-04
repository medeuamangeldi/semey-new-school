import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import styles from "./smoothScroll.module.scss";

const Example = () => {
  return <HorizontalScrollCarousel />;
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }: any) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <span className={styles["card-title"]}>{card.title}</span>
        {card.extraTitle && <span className={styles["card-title-extra"]}>{card.extraTitle}</span>}
        {card.text && <span className={styles["card-title-text"]}>{card.text}</span>}
      </div>
    </div>
  );
};

export default Example;

const cards = [
  {
    url: "/imgs/abstract/1.jpg",
    title: "Elevate your",
    extraTitle: "Academic potential",
    text: "Talented teachers, high academic standards, and the development of leadership skills in a coed environment are the hallmarks of a Semey New School education.",
    id: 1,
  },
  {
    url: "/imgs/abstract/2.jpg",
    title: "Leading Faculty",
    id: 2,
  },
  {
    url: "/imgs/abstract/3.jpg",
    title: "Leading Facilities",
    id: 3,
  },
  {
    url: "/imgs/abstract/4.jpg",
    title: "Leading Opportunities",
    id: 4,
  },
];
