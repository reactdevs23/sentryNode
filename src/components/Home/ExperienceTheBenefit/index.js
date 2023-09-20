import React from "react";
import styles from "./styles.module.css";
import BuildAndShipFaster from "./BuildAndShipFaster";
import PayAsYouGo from "./PayAsYouGo";
import CustomerSupport from "./CustomerSupport";
import ReliableSecureAndFast from "./ReliableSecureAndFast";
import { featuresLine } from "../../../images/images";

const ExperienceTheBenefit = () => {
  return (
    <section className="maxWidth">
      <div className={styles.wrapper}>
        <div className={styles.textContainer}>
          {" "}
          <h3 className={styles.heading}>
            Experience the Benefits of <br className={styles.br} /> Rapid API
            Deployment
          </h3>
          <p className={styles.tagline}>
            Lörem ipsum deling exortad. Volig pore <br className={styles.br} />{" "}
            räckviddsångest och parament.
          </p>
        </div>
        <div className={styles.allFeatures}>
          <BuildAndShipFaster />
          <PayAsYouGo />
          <CustomerSupport />
          <ReliableSecureAndFast />
          <img src={featuresLine} alt="#" className={styles.featuresLine} />
        </div>
      </div>
    </section>
  );
};

export default ExperienceTheBenefit;
