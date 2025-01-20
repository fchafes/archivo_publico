"use client";

import { useEffect } from "react";
import { imagePaths } from "../../data/imagePaths";
import styles from "./page.module.css";

export default function Home() {
  useEffect(() => {
    const scrollContainer = document.querySelector(`.${styles.imageSlider}`);

    const onWheel = (event) => {
      event.preventDefault();
      scrollContainer.scrollLeft += event.deltaY;
    };

    scrollContainer.addEventListener("wheel", onWheel);

    return () => {
      scrollContainer.removeEventListener("wheel", onWheel);
    };
  }, []);

  return (
    <div className={styles.imageSlider}>
      {imagePaths.map((src, index) => (
        <div key={index} className={styles.imageBox}>
          <img className={styles.img} src={src} alt={`Imagen ${index + 1}`} />
        </div>
      ))}
    </div>
  );
}
