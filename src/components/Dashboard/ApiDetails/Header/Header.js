import React from "react";
import { BiChevronDown } from "react-icons/bi";
import { TbServer } from "react-icons/tb";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.iconAndInfo}>
        <div className={styles.iconContainer}>
          <TbServer className={styles.icon} />
        </div>
        <div className={styles.info}>
          <p className={styles.name}>ubuntu-s-2vcpu-4gb-120gb-intel-sfo3-01</p>
          <p className={styles.details}>
            E-2386G, 6 Cores @ 3.5 GHz / 32 GB RAM / 800 GB NVME / 10 Gbps NIC
          </p>
        </div>
      </div>
      <p className={styles.status}>
        {" "}
        <span className={styles.circle}></span> Active
        <BiChevronDown className={styles.arrow} />
      </p>
    </div>
  );
};

export default Header;
