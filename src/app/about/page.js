import styles from "./page.module.css";

export default function About() {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.textContainer}>
        <div className={styles.textBox}>
          <p>
            A brand founded in 2024 by Mariela Ortega as an extension of her
            love for fashion, textures, volume, silhouettes and feeling through
            costume. Archivo Público exists to join you with items of clothing
            that have lived another life.
          </p>
        </div>
          <div className={styles.textBox}>
            <p>
              Just like a library that brings together words, book plots,
              delicious melodies, plays, love letters, surprise emails,
              friendship poems and documents of extensive research; We gather,
              curate and tell our story to the fashionably curious through
              pieces selected under the criteria of dressing well.
            </p>
          </div>
          <div className={styles.textBox}>
            <p>
              A space that brings together pieces that tell you a story, invite
              you to invent and encourage you to feel. We welcome you as part of
              the infinite circular flow of garments with past lives, present
              lives and potential future lives.
            </p>
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
