import { imagePaths } from "../../data/imagePaths";
import styles from "./page.module.css";
import Image from "next/image";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function Home() {
  console.log("esto es imagePaths", imagePaths);
  return (
    <div className={styles.imageSlider}>
      <Image
        src="/images/logotipo_ap.png"
        alt="Logotipo de Archivo Público"
        layout="responsive"
        width={400}
        height={56}
        priority
      />
      <Image
        src="/images/slider/home_10.jpg"
        width={500}
        height={500}
        alt="imagen-next"
      />
      {imagePaths.map((src, index) => (
        <div key={index} className={styles.imageBox}>
          {/* <img className={styles.img} src={src} alt={`Imagen ${index + 1}`} /> */}
          <Image src={src} width={500} height={500} alt="imagen-next" />
        </div>
      ))}
    </div>
  );
}
