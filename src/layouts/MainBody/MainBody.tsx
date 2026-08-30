import type React from "react";
import styles from "./MainBody.module.css";

const MainBody = ({ children }: {children: React.ReactNode}) => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>{children}</div>
    </main>
  );
};

export default MainBody;
