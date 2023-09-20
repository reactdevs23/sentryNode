import React from "react";
import { LiaArrowRightSolid } from "react-icons/lia";
import {
  expertiseLeft,
  expertiseRight,
  apiDeployment,
  apiIntegration,
  apiMonitoring,
} from "../../../images/images";
import styles from "./LatestExpertis.module.css";

const LatestExpertise = () => {
  const ourExpertise = [
    {
      image: apiDeployment,
      title: "Mastering API Deployment: A Step-by-Step Guide for Beginners",
      info: "Lörem ipsum deling exortad. Volig pore räckviddsångest och parament. Dining reagam.  Lörem ipsum deling exortad. Volig pore räckviddsångest och parament. Dining reagam. ",
      to: "",
    },
    {
      image: apiIntegration,
      title: "The Art of Efficient API Integration: Best Practices and Tips",
      info: "Lörem ipsum deling exortad. Volig pore räckviddsångest och parament. Dining reagam.  Lörem ipsum deling exortad. Volig pore räckviddsångest och parament. Dining reagam. ",
      to: "",
    },
    {
      image: apiMonitoring,
      title: "Real-time API Monitoring: Ensuring Peak Performance for ...",
      info: "Lörem ipsum deling exortad. Volig pore räckviddsångest och parament. Dining reagam.  Lörem ipsum deling exortad. Volig pore räckviddsångest och parament. Dining reagam. ",
      to: "",
    },
  ];
  return (
    <div className={styles.wrapper}>
      {" "}
      <img src={expertiseLeft} alt="#" className={styles.leftImage} />
      <img src={expertiseRight} alt="#" className={styles.rightImage} />
      <div className={styles.textContainer}>
        <h2 className={styles.heading}>
          Explore Our Latest Insights <br className={styles.br} /> and Expertise
        </h2>
        <p className={styles.tagline}>
          Lörem ipsum deling exortad. Volig pore räckviddsångest och parament.
        </p>
      </div>
      <div className={styles.ourExpertise}>
        {ourExpertise.map((expertise, i) => (
          <div className={styles.expertise} key={i}>
            <img src={expertise.image} alt="#" className={styles.image} />

            <h4 className={styles.title}>{expertise.title}</h4>
            <p className={styles.info}>{expertise.info}</p>
            <div className={styles.learnMoreContainer}>
              <a
                href={expertise.to}
                target="_blank"
                rel="noreferrer"
                className={[styles.learnMore, styles.info].join(" ")}
              >
                Learn More
              </a>
              <div className={styles.iconContainer}>
                <LiaArrowRightSolid className={styles.icon} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestExpertise;
