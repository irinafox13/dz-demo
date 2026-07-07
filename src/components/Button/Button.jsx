import styles from "./Button.module.css"

const Button = ({ children }) => <button className={styles.btn}>{children}</button>;

export default Button;
