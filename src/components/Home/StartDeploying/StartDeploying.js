import React from "react";
import styles from "./StartDeploying.module.css";
import { startDeploying } from "../../../images/images";

const StartDeploying = () => {
  return (
    <section className="maxWidth">
      <div className={styles.wrapper}>
        <div className={styles.textContainer}>
          <h2 className={styles.title}>
            Get Started Now and <br /> Deploy APIs with Ease!
          </h2>
          <p className={styles.tagline}>
            Lörem ipsum deling exortad. Volig pore <br /> räckviddsångest och
            parament.
          </p>
          <button className={styles.button}>Start Deploying</button>
        </div>
        <div className={styles.imageContainer}>
          <img src={startDeploying} alt="#" className={styles.image} />
        </div>
      </div>
    </section>
  );
};

export default StartDeploying;
