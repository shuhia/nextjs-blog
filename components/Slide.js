import React from "react";
import styles from "../styles/Slideshow.module.scss";

const Slide = ({ src, id }) => {
  return (
    <div className={styles.fade}>
      <div className="numbertext">{id}</div>
      <img src={src} style={{ width: "100%" }} />
      <div className={styles.text}>Caption {id}</div>
    </div>
  );
};

export default Slide;
