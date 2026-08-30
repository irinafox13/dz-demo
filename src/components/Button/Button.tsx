import type { ButtonProps } from "./Button.props";
import styles from "./Button.module.css";

const Button = ({ children, onClick }: ButtonProps) => (
  <button className={styles.btn} onClick={onClick}>
    {children}
  </button>
);

export default Button;
