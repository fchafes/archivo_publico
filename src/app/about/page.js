import styles from "./page.module.css";
import Link from "next/link";

export default function About() {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.textContainer}>
        <div className={styles.textBox}>
          <p>
            ARCHIVO_PUBLICO® IS AN ONLINE SHOP DEDICATED TO SELECT/CURATE
            FASHION UNIQUE PIECES FROM THE WORLD ARCHIVE, AVAILABLE.
          </p>
        </div>
        <div className={styles.textBox}>
          <ul>
            <li>BRANDS</li>
            <li>1017 ALYX 9SM</li>
            <li>ALTUZZARA</li>
            <li>ARMANI</li>
            <li>A.W.A.K.E MODE</li>
            <li>BOTTEGA VENETA</li>
            <li>BURBERRY</li>
            <li>CALVIN KLEIN</li>
            <li>CHICO</li>
            <li>DONNA KARAN</li>
            <li>FIORUCCI</li>
            <li>GIVENCHY</li>
            <li>ISABEL MARANT</li>
            <li>RALPH LAUREN</li>
            <li>LAVIN</li>
          </ul>
        </div>
        <div className={styles.textBox}>
          <p>CONTACT</p>
          <ul>
          <li><Link href="mailto:archivopublico@gmail.com">E-MAIL</Link></li>
          <li><Link
            href="https://www.instagram.com/archivo__publico/"
            target="_blank"
            rel="noopener noreferrer"
          >
            INSTAGRAM
          </Link></li>
          </ul>
        </div>
        <div className={styles.textBox}>
          <p>ARCHIVO PÚBLICO LLC</p>
          <p>LOREM IPSUM STREET 17</p>
          <p>77716 MIAMI, US</p>
        </div>
        <div className={styles.textBox}>
          <p>CREDITS</p>
          <p>VISUAL IDENTITY: RICARDO BÁEZ</p>
          <p>WEBSITE: ESTUDIO BLENDE</p>
          <p>DEVELOPMENT: FEDERICO CHAFES</p>
          <p>PHOTOGRAPHY: LOREM IMPSUM</p>
        </div>
        <div className={styles.textBox}>
          <p>© ARCHIVO_PUBLICO 2024</p>
          <p>ALL RIGHTS RESERVED</p>
        </div>
      </div>
    </div>
  );
}
