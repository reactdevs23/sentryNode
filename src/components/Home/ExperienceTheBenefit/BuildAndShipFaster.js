import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";

import { shipFaster } from "../../../images/images";
import styles from "./styles.module.css";

const BuildAndShipFaster = () => {
  const facilities = [
    "Lörem ipsum menskopp parasport",
    "Trek häs har somögt Lörem ipsum menskopp ",
    "Menskopp parasport. Trek häs har somögt. ",
  ];
  return (
    <div className={styles.container}>
      {" "}
      <div className={styles.imageContainer}>
        <img src={shipFaster} alt="#" className={styles.image} />
      </div>
      <div className={styles.facilitiesContainer}>
        <h3 className={styles.title}>Build and Ship Faster</h3>
        <p className={styles.info}>
          Lörem ipsum deling exortad. Volig pore räckviddsångest och parament.
          Dining reagam. Lörem ipsum deling exortad. Volig pore räckviddsångest
          och parament. Dining reagam.{" "}
        </p>

        <div className={styles.facilities}>
          {facilities.map((facility, i) => (
            <p className={styles.facility} key={i}>
              <BsCheckCircleFill className={styles.circleCheck} />
              <span>{facility}</span>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BuildAndShipFaster;
