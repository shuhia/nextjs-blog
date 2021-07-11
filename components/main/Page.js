import React from "react";
import styles from "../../styles/Page.module.css";

const Page = ({ children, title }) => {
  return (
    <div>
      <h1 className={styles.title}>{title}</h1>
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default Page;
