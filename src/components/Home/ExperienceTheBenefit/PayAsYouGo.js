import React from "react";
import { LiaArrowRightSolid } from "react-icons/lia";
import { payAsyouGo } from "../../../images/images";
import styles from "./styles.module.css";
const PayAsYouGo = () => {
  const facilities = [
    "Lörem ipsum menskopp parasport",
    "Trek häs har somögt Lörem ipsum menskopp ",
    "Menskopp parasport. Trek häs har somögt. ",
  ];
  return (
    <div className={[styles.container, styles.gridChange].join(" ")}>
      {" "}
      <div className={styles.facilitiesContainer}>
        <h3 className={styles.title}>Pay As you Go</h3>
        <p className={styles.info}>
          Lörem ipsum deling exortad. Volig pore räckviddsångest och parament.
          Dining reagam. Lörem ipsum deling exortad. Volig pore räckviddsångest
          och parament. Dining reagam.{" "}
        </p>

        <div className={styles.facilities}>
          {facilities.map((facility, i) => (
            <p className={styles.facility} key={i}>
              <LiaArrowRightSolid className={styles.rightArrow} />
              <span>{facility}</span>
            </p>
          ))}
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img src={payAsyouGo} alt="#" className={styles.image} />
      </div>
    </div>
  );
};

export default PayAsYouGo;
