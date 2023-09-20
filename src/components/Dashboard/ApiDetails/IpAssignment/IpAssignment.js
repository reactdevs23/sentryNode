import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { RxCopy } from "react-icons/rx";
import { BiChevronDown } from "react-icons/bi";
import styles from "./IpAssignment.module.css";

const IpAssignment = () => {
  const [copyIp4, setCopyIp4] = useState(false);
  const [copyIp6, setCopyIp6] = useState(false);
  return (
    <div className={styles.wrapper}>
      <h4 className={styles.title}>IP Assignment</h4>

      <div className={styles.infoBox}>
        <div className={styles.spaceBetween}>
          <p className={styles.key}>IP4</p>
          <CopyToClipboard text="165.242.111">
            <p
              className={[
                styles.value,
                styles.id,
                copyIp4 && styles.copied,
              ].join(" ")}
            >
              <span>165.242.111</span>
              <RxCopy
                className={styles.copyIcon}
                onClick={() => {
                  setCopyIp4(true);
                  setTimeout(() => setCopyIp4(false), 300);
                }}
              />
            </p>
          </CopyToClipboard>
        </div>{" "}
        <div className={styles.spaceBetween}>
          <p className={styles.key}>IP6</p>
          <CopyToClipboard text="2605:2422:224511:1:5633:222:1153:50">
            <p
              className={[
                styles.value,
                styles.id,
                copyIp6 && styles.copied,
              ].join(" ")}
            >
              <span>2605:2422:224511:1:5633:222:1153:50</span>
              <RxCopy
                className={styles.copyIcon}
                onClick={() => {
                  setCopyIp6(true);
                  setTimeout(() => setCopyIp6(false), 300);
                }}
              />
            </p>
          </CopyToClipboard>
        </div>{" "}
        <div className={styles.spaceBetween}>
          <p className={styles.key}>Public</p>
          <p className={styles.status}>
            Public
            <BiChevronDown className={styles.arrow} />
          </p>
        </div>{" "}
      </div>
    </div>
  );
};

export default IpAssignment;
