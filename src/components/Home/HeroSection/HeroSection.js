import React from "react";
import {
  heroCursor,
  heroCurve,
  heroDot,
  heroImg,
  heroUser,
} from "../../../images/images";
import styles from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <div className={styles.wrapper}>
      <div className="maxWidth">
        <div className={styles.textContainer}>
          <img
            src={heroCursor}
            alt="#"
            className={[styles.absoluteImage, styles.heroCursor].join(" ")}
          />
          <h2 className={styles.heading}>
            API Deployment in Minutes: <br /> Your Fast-Track to Success!
          </h2>
          <p className={styles.tagline}>
            Lörem ipsum deling exortad. Volig pore räckviddsångest{" "}
            <br className={styles.br} /> och parament. Dining reagam.{" "}
          </p>{" "}
          <img
            src={heroUser}
            alt="#"
            className={[styles.absoluteImage, styles.userImage].join(" ")}
          />
        </div>{" "}
      </div>{" "}
      <div className={styles.imagesWrapper}>
        <div className={styles.imageContainer}>
          <img src={heroImg} alt="#" className={styles.image} />{" "}
          <img
            src={heroCurve}
            alt="#"
            className={[styles.heroCurve, styles.absoluteImage].join(" ")}
          />{" "}
          <img
            src={heroDot}
            alt="#"
            className={[styles.heroDot, styles.absoluteImage].join(" ")}
          />
        </div>
        <button className={styles.button}>Start Deploying</button>
      </div>{" "}
    </div>
  );
};

export default HeroSection;
