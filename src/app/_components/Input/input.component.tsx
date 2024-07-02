"use client";
import styles from "./input.module.scss";

const Input = ({ ...props }) => {
  const { type, placeholder, label, register, errors, name, required } = props;
  return (
    <div className={styles["input-container"]}>
      <label htmlFor={name} className={styles["input-container-label"]}>
        {label}
      </label>
      <input
        id={name}
        className={styles["input-container-input"]}
        type={type}
        placeholder={placeholder}
        {...register(name)}
        autoComplete="off"
      />
      {errors[name] && (
        <span className={styles["input-container-error"]}>
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
};

export default Input;
