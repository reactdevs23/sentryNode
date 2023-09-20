import React from "react";
import styles from "./Members.module.css";
import DropDown from "./DropDown/DropDown";

const SingleMember = ({ name, emailAddress, mfa, role }) => {
  return (
    <tr className={styles.row}>
      <td
        className={[styles.item, styles.projectImageAndNameContainer].join(" ")}
      >
        <div className={styles.userContainer}>
          <p className={styles.user}>
            {name
              .split(" ")
              .map((part) => part[0].toUpperCase())
              .join("")}
          </p>
          <p className={styles.name}>{name}</p>
        </div>
      </td>

      <td className={styles.item}>{emailAddress}</td>
      <td className={styles.item}>{mfa}</td>
      <td className={styles.item}>
        <DropDown role={role} />
      </td>
    </tr>
  );
};

export default SingleMember;
