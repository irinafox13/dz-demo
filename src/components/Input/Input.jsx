import styles from "./Input.module.css";

const Input = ({ onChange, icon = "", value = "", placeholder = "Введите значение" }) => (
  <div className={styles.inputBlock}>
    {icon && <span  className={styles.inputIcon} style={{backgroundImage: `url(${icon})`}}></span>}
    <input
      type="text"
      className={styles.input + " " + (icon.length > 0 ? styles.inputWithIcon : "")}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  </div>
);

export default Input;
