import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi,<br/> I'm Seenivasan</h1>
        <p className={styles.description}>
          I'm a full-stack developer !
        </p>
        <a href="https://drive.google.com/file/d/11mcqSILjJ5--buRXRj-FjDKddi9jEoTJ/view?usp=drive_link" className={styles.contactBtn} target="_blank">
         View Resume
        </a>
      </div>
      <img
        src={getImageUrl("hero/hero.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
