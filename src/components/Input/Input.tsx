import { forwardRef } from "react";
import styles from "./Input.module.css";
import type {InputProps} from "./Input.props"

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { onChange, icon = "", value = "", placeholder = "Введите значение" },
    ref,
  ) => (
    <div className={styles.inputBlock}>
      {icon && (
        <span
          className={styles.inputIcon}
          style={{ backgroundImage: `url(${icon})` }}
        ></span>
      )}
      <input
        type="text"
        ref={ref}
        className={
          styles.input + " " + (icon.length > 0 ? styles.inputWithIcon : "")
        }
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  ),
);

export default Input;
