import React from "react";
import styles from "./BandwithUsage.module.css";
import ProgressBar from "./Progressbar/Progressbar";

const BandwithUsage = () => {
  return (
    <div className={styles.wrapper}>
      <h4 className={styles.title}>Bandwidth Usage</h4>

      <div className={styles.infoBox}>
        <div className={styles.spaceBetween}>
          <p className={styles.key}>Current Billing Cycle</p>
          <p className={styles.value}>Sep 15- Sep 25</p>
        </div>
        <div className={styles.progressWrapper}>
          <p className={styles.key}>Incoming</p> <ProgressBar progress={70} />
          <p className={styles.value}>50 GB</p>
        </div>{" "}
        <div className={styles.progressWrapper}>
          <p className={styles.key}>Outgoing</p> <ProgressBar progress={30} />
          <p className={styles.value}>30 GB</p>
        </div>
      </div>
    </div>
  );
};

export default BandwithUsage;
