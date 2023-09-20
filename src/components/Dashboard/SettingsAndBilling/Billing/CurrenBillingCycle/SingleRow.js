import React from "react";
import styles from "./CurrentBillingCycle.module.css";
const SingleRow = ({ image, name, usage, nextInvoice, viewUsage }) => {
  return (
    <tr className={styles.row}>
      <td
        className={[styles.item, styles.projectImageAndNameContainer].join(" ")}
      >
        <div className={styles.projectImageAndName}>
          <img src={image} alt="#" className={styles.projectImage} />
          <p className={styles.name}>{name}</p>
        </div>
      </td>
      <td className={styles.item}>{usage}</td>
      <td className={styles.item}>{nextInvoice}</td>
      <td className={styles.item}>
        <a href={viewUsage} className={styles.viewUsage}>
          View Usage
        </a>
      </td>
    </tr>
  );
};

export default SingleRow;
