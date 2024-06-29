import { useClickAway } from "react-use";
import { useEffect, useRef } from "react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";
import { routes } from "@/app/_helpers/routes";
import styles from "./nav-mobile.module.scss";
import { t } from "../../_helpers/translate";
import { Link } from "@/navigation";

export const NavMobile = () => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);
  const [locale, setLocale]: any = useState("");

  useClickAway(ref, () => setOpen(false));
  // useEffect(() => {
  //   setLocale(localStorage.getItem("locale"));
  // }, []);
  return (
    <div ref={ref}>
      <div className={styles["menu"]}>
        <Hamburger toggled={isOpen} size={20} toggle={setOpen} />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={styles["main"]}
          >
            <ul className={styles["grid"]}>
              {routes.map((route, idx) => {
                const { Icon } = route;

                return (
                  <motion.li
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.1 + idx / 10,
                    }}
                    key={route.title}
                    className={styles["list"]}
                  >
                    <Link
                      onClick={() => setOpen((prev) => !prev)}
                      className={styles["item"]}
                      href={route.href}
                    >
                      <span className="flex gap-1 text-lg">
                        {t(route.title, locale)}
                      </span>
                      <Icon className="text-xl" />
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
