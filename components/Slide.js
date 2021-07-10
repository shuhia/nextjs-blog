import React from "react";
import styles from "../styles/Slideshow.module.scss";
import Image from "next/image";

const Slide = ({ src, id }) => {
  return (
    <div
      className={styles.fade}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="numbertext">{id}</div>
      <Image src={src} width="500%" height="500%"></Image>
      <div className={styles.text}>Caption {id}</div>
    </div>
  );
};

export default Slide;
