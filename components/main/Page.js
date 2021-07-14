import React from "react";
import styles from "../../styles/Page.module.scss";

const Page = ({ children, title }) => {
  return (
    <div>
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default Page;
