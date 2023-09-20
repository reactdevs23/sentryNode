import React from "react";
import styles from "./Invoices.module.css";
import SingleInvoice from "./SingleInvoice";
import { aceMako, bravo } from "../../../../../images/images";
const Invoices = () => {
  const invoicesData = [
    {
      invoice: "76FA29E3-0001",
      image: aceMako,
      name: "AceMako",
      total: "Oct 14, 2023",
      status: "paid",
      view: "",
    },
    {
      invoice: "646522-522",
      image: bravo,
      name: "Bravo",
      total: "Oct 14, 2023",
      status: "due",
      view: "",
    },
  ];
  return (
    <div className={styles.wrapper}>
      <h4 className={styles.title}>Invoices</h4>
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <tbody>
            <tr className={[styles.row].join(" ")}>
              <th className={styles.heading}>Invoice</th>
              <th className={styles.heading}>Project</th>
              <th className={styles.heading}>Total</th>
              <th className={styles.heading}>Status</th>
              <th className={styles.heading}></th>{" "}
            </tr>
            {invoicesData.map((el, index) => (
              <SingleInvoice {...el} key={index} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Invoices;
