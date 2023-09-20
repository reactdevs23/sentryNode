import React from "react";
import {
  afterPay,
  everNote,
  outReach,
  framer,
  pipeDrive,
  attentive,
  senos,
  rippling,
} from "../../../images/images";
import styles from "./Partners.module.css";

const Partners = () => {
  const partners = [
    afterPay,
    everNote,
    outReach,
    framer,
    pipeDrive,
    attentive,
    senos,
    rippling,
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.marquee}>
        <div className={styles.marqueGroup}>
          {partners.map((el, i) => (
            <div className={styles.imageGroup} key={i}>
              <img src={el} alt="#" className={styles.image} />
            </div>
          ))}
        </div>
        <div className={styles.marqueGroup}>
          {partners.map((el, i) => (
            <div className={styles.imageGroup} key={i}>
              <img src={el} alt="#" className={styles.image} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
