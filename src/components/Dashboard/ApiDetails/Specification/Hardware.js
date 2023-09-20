import React, { useState } from "react";

import { BiChevronDown } from "react-icons/bi";

import styles from "./styles.module.css";

const Hardware = () => {
  const [showSpecefication, setShowSpecefication] = useState(true);
  return (
    <div className={styles.wrapper}>
      <div className={styles.titleContainer}>
        <h4
          className={styles.title}
          onClick={() => setShowSpecefication((prev) => !prev)}
        >
          Hardware
        </h4>
        <BiChevronDown
          className={styles.arrow}
          onClick={() => setShowSpecefication((prev) => !prev)}
        />
      </div>
      {showSpecefication && (
        <div className={styles.infoBox}>
          <div className={styles.spaceBetween}>
            <p className={styles.key}>CPU</p>{" "}
            <p className={styles.value}>Xeon E-2176G CPU @3.70 GHZ</p>
          </div>{" "}
          <div className={styles.spaceBetween}>
            <p className={styles.key}>RAM</p>{" "}
            <p className={styles.value}>64 GB</p>
          </div>{" "}
          <div className={styles.spaceBetween}>
            <p className={styles.key}>Disk</p>{" "}
            <p className={styles.value}>2 x 960 SSD</p>
          </div>{" "}
          <div className={styles.spaceBetween}>
            <p className={styles.key}>NICs</p>{" "}
            <p className={styles.value}>2 x 1 Gbit/s</p>
          </div>{" "}
        </div>
      )}
    </div>
  );
};

export default Hardware;
