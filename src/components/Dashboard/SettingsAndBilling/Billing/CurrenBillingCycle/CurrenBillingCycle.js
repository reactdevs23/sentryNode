import React from "react";

import styles from "./CurrentBillingCycle.module.css";
import SingleRow from "./SingleRow";
import { aceMako, bravo } from "../../../../../images/images";

const CurrenBillingCycle = () => {
  const billingCyclesData = [
    {
      id: "5343",
      image: aceMako,
      name: "AceMako",
      usage: "$0",
      nextInvoice: "Oct 14, 2023",
      viewUsage: "",
    },
    {
      id: "5343",
      image: bravo,
      name: "Bravo",
      usage: "$0",
      nextInvoice: "Oct 14, 2023",
      viewUsage: "",
    },
  ];
  return (
    <div className={styles.wrapper}>
      <div>
        <h4 className={styles.title}>Current billing cycle</h4>
        <p className={styles.text}>
          These are previews of upcoming invoices. They may change if the
          subscription is updated.
        </p>
      </div>
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <tbody>
            <tr className={[styles.row].join(" ")}>
              <th className={styles.heading}>Project</th>
              <th className={styles.heading}>Usage</th>
              <th className={styles.heading}>Next Invoice</th>
              <th className={styles.heading}></th>
            </tr>
            {billingCyclesData.map((el, index) => (
              <SingleRow {...el} key={index} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CurrenBillingCycle;
