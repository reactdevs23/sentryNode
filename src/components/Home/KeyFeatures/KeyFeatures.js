import React from "react";
import {
  toolkit,
  interfaceIcon,
  monitoring,
  featureLeft,
  featureRight,
} from "../../../images/images";
import styles from "./KeyFeatures.module.css";

const KeyFeatures = () => {
  const keyFeatures = [
    {
      icon: toolkit,
      title: "Complete Toolkit for the API",
      info: "Lörem ipsum deling exortad. Volig pore räckviddsångest och parament. Dining reagam.  Lörem ipsum deling exortad. Volig pore räckviddsångest och parament. Dining reagam. ",
    },
    {
      icon: interfaceIcon,
      title: "Intuitive Interface",
      info: "Lörem ipsum deling exortad. Volig pore räckviddsångest och parament. Dining reagam.  Lörem ipsum deling exortad. Volig pore räckviddsångest och parament. Dining reagam. ",
    },
    {
      icon: monitoring,
      title: "Real-time Monitoring",
      info: "Lörem ipsum deling exortad. Volig pore räckviddsångest och parament. Dining reagam.  Lörem ipsum deling exortad. Volig pore räckviddsångest och parament. Dining reagam. ",
    },
  ];
  return (
    <div className={styles.wrapper}>
      <div className={styles.textContainer}>
        <img src={featureLeft} alt="#" className={styles.leftImage} />
        <img src={featureRight} alt="#" className={styles.rightImage} />
        <h2 className={styles.heading}>
          Key Features for Effortless <br className={styles.br} /> API
          Deployment
        </h2>
        <p className={styles.tagline}>
          Lörem ipsum deling exortad. Volig pore räckviddsångest och parament.
        </p>
      </div>
      <div className={styles.keyFeatures}>
        {keyFeatures.map((feature, i) => (
          <div className={styles.keyFeature} key={i}>
            <div className={styles.iconContainer}>
              <img src={feature.icon} alt="#" className={styles.icon} />
            </div>
            <h4 className={styles.title}>{feature.title}</h4>
            <p className={[styles.info]}>{feature.info}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyFeatures;
