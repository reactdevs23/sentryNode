import React from "react";
import { BiPlusCircle } from "react-icons/bi";
import styles from "./Members.module.css";
import SingleMember from "./SingleMember";

const Members = () => {
  const invoicesData = [
    {
      name: "Hussain Abid",
      emailAddress: "test@test.com",
      mfa: "",
      role: ["Owner", "Member"],
    },
    {
      name: "Alex Smith",
      emailAddress: "test@test.com",
      mfa: "",
      role: ["Owner", "Member"],
    },
  ];
  return (
    <div className={styles.wrapper}>
      <div className={styles.topHeader}>
        <p className={styles.title}>Members</p>
        <button className={styles.button}>
          <BiPlusCircle className={styles.addIcon} />
          Add New Member
        </button>
      </div>
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <tbody>
            <tr className={[styles.row].join(" ")}>
              <th className={styles.heading}>User</th>
              <th className={styles.heading}>Email Address</th>
              <th className={styles.heading}>MFA</th>
              <th className={styles.heading}>Role</th>
            </tr>
            {invoicesData.map((el, index) => (
              <SingleMember {...el} key={index} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Members;
