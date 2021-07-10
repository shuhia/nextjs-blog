import React, { useState, useRef, useEffect } from "react";
import styles from "../styles/Slideshow.module.scss";
import Slide from "./Slide";

const Slideshow = () => {
  // var slideIndex = 1;
  const [slideIndex, setSlideIndex] = useState(0);
  const [componentMounted, setComponentMounted] = useState(false);

  const [slides, setSlides] = useState([]);

  function addDiceSlides() {
    addSlide("images/dice-1.jpg");
    addSlide("images/dice-2.jpg");
    addSlide("images/dice-3.jpg");
  }

  function addSlide(src) {
    setSlides((prev) => [...prev, <Slide src={src} id={prev.length}></Slide>]);
  }

  // Next/previous controls
  function incrementSlideBy(n) {
    return function () {
      setSlideIndex((prev) => Math.abs(n + prev) % slides.length);

      console.log(incrementSlideBy.name + ": " + n);
    };
  }

  function setCurrentSlide(n) {
    return function () {
      setSlideIndex(n);
      console.log(setCurrentSlide.name + ":" + n);
    };
  }

  useEffect(() => {
    addDiceSlides();
  }, []);

  return (
    <div>
      <div className={styles.slideshowContainer}>
        {slides.length > 0 && slides[slideIndex]}
        <a className={styles.prev} onClick={incrementSlideBy(-1)}>
          &#10094;
        </a>
        <a className={styles.next} onClick={incrementSlideBy(1)}>
          &#10095;
        </a>
      </div>
      <br />
      <div style={{ textAlign: "center" }}>
        <span className={styles.dot} onClick={setCurrentSlide(0)}></span>
        <span className={styles.dot} onClick={setCurrentSlide(1)}></span>
        <span className={styles.dot} onClick={setCurrentSlide(2)}></span>
      </div>
    </div>
  );
};

export default Slideshow;
