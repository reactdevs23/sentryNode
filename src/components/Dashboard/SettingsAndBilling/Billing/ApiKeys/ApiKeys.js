import React from "react";
import { BiPlusCircle } from "react-icons/bi";
import SingleApiKey from "./SingleApiKey";
import styles from "./ApiKeys.module.css";

const ApiKeys = () => {
  const invoicesData = [
    {
      name: "Deployment key",
      token: "wgsd...2adsad",
      lastUsed: "3 days ago",
      created: "Sep 11, 2023",
    },
    {
      name: "Deployment key",
      token: "wgsd...2adsad",
      lastUsed: "3 days ago",
      created: "Sep 11, 2023",
    },
  ];
  return (
    <div className={styles.wrapper}>
      <div className={styles.topHeader}>
        <p className={styles.title}>Api Keys</p>
        <button className={styles.button}>
          <BiPlusCircle className={styles.addIcon} />
          Add New Member
        </button>
      </div>
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <tbody>
            <tr className={[styles.row].join(" ")}>
              <th className={styles.heading}>Name</th>
              <th className={styles.heading}>Token</th>
              <th className={styles.heading}>Last Used</th>
              <th className={styles.heading}>Created</th>
            </tr>
            {invoicesData.map((el, index) => (
              <SingleApiKey {...el} key={index} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApiKeys;
