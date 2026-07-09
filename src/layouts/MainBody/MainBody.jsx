import styles from "./MainBody.module.css";

const MainBody = ({ children }) => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>{children}</div>
    </main>
  );
};

export default MainBody;
