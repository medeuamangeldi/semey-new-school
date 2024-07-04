import styles from "./spinner.module.scss";
import { RiLoader2Line } from "react-icons/ri";
const Spinner = () => {
  return (
    <div className={styles.overlay}>
      <RiLoader2Line size={50} color="#7c1120" className={styles["spinner"]} />
    </div>
  );
};

export default Spinner;
