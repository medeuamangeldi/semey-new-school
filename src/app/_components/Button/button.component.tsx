import styles from "./button.module.scss";

const Button = ({ ...props }) => {
  const { children, onClick, type, disabled } = props;
  return (
    <div className={styles["button-container"]}>
      <button
        type={type}
        onClick={onClick}
        className={styles["button-container-primary"]}
        disabled={disabled}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
