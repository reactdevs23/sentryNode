import React from "react";
import styles from "./ApiKeys.module.css";

const SingleApiKey = ({ name, token, lastUsed, created }) => {
  return (
    <tr className={styles.row}>
      <td
        className={[styles.item, styles.projectImageAndNameContainer].join(" ")}
      >
        {name}
      </td>

      <td className={styles.item}>{token}</td>
      <td className={styles.item}>{lastUsed}</td>
      <td className={styles.item}>{created}</td>
    </tr>
  );
};

export default SingleApiKey;
