import React from "react";
import styles from "./Invoices.module.css";

const SingleInvoice = ({ invoice, image, name, total, status, view }) => {
  return (
    <tr className={styles.row}>
      <td className={styles.item}># {invoice}</td>
      <td
        className={[styles.item, styles.projectImageAndNameContainer].join(" ")}
      >
        <div className={styles.projectImageAndName}>
          <img src={image} alt="#" className={styles.projectImage} />
          <p className={styles.name}>{name}</p>
        </div>
      </td>

      <td className={styles.item}>{total}</td>
      <td className={styles.item}>
        <div className={styles.statusContainer}>
          <p
            className={[
              styles.status,
              status.toLocaleLowerCase() === "paid" && styles.paid,
              status.toLocaleLowerCase() === "due" && styles.due,
            ].join(" ")}
          >
            <span className={styles.circle}></span> {status}
          </p>
        </div>
      </td>
      <td className={styles.item}>
        <a href={view} className={styles.viewUsage}>
          View
        </a>
      </td>
    </tr>
  );
};

export default SingleInvoice;
