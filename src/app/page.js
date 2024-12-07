"use client";

import { imagePaths } from "../../data/imagePaths";
import styles from "./page.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useState } from "react";

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  // Verificación para asegurarse de que el código solo se ejecute en el cliente
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Solo ejecutamos la animación cuando el componente se monta en el cliente
      gsap.registerPlugin(ScrollTrigger); // Registra el plugin solo en el cliente
      setIsClient(true); // Marca que el cliente ha cargado
    }
  }, []);

  useEffect(() => {
    if (isClient) {
      // Solo ejecuta la animación si estamos en el cliente
      let sections = gsap.utils.toArray(".imageBox");

      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: ".imageSlider",
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          end: "+=3000",
        },
      });
    }
  }, [isClient]);

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
