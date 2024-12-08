import { imagePaths } from "../../data/imagePaths";
import styles from "./page.module.css";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function Home() {

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
