import React, { useState } from "react";
import { TbServer } from "react-icons/tb";
import { BiChevronDown } from "react-icons/bi";
import { ubuntu, usaFlag } from "../../../../images/images";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { RxCopy } from "react-icons/rx";
import styles from "./styles.module.css";

const Properties = () => {
  const [showSpecefication, setShowSpecefication] = useState(true);
  const [copyIp, setCopyIp] = useState(false);
  return (
    <div className={styles.wrapper}>
      <div className={styles.titleContainer}>
        <h4
          className={styles.title}
          onClick={() => setShowSpecefication((prev) => !prev)}
        >
          Properties
        </h4>
        <BiChevronDown
          className={styles.arrow}
          onClick={() => setShowSpecefication((prev) => !prev)}
        />
      </div>
      {showSpecefication && (
        <div className={styles.infoBox}>
          <div className={styles.spaceBetween}>
            <p className={styles.key}>Hostname</p>{" "}
            <div className={styles.valueContainer}>
              <TbServer className={styles.serverIcon} />
              <p className={styles.value}>c2-micro-x64-chi-1</p>
            </div>
          </div>{" "}
          <div className={styles.spaceBetween}>
            <p className={styles.key}>OS</p>{" "}
            <div className={styles.valueContainer}>
              <img src={ubuntu} alt="#" className={styles.logo} />
              <p className={styles.value}>Ubuntu 20.1</p>
            </div>
          </div>{" "}
          <div className={styles.spaceBetween}>
            <p className={styles.key}>Location</p>{" "}
            <div className={styles.valueContainer}>
              <img src={usaFlag} alt="#" className={styles.logo} />
              <p className={styles.value}>Chicago Ch1</p>
            </div>
          </div>{" "}
          <div className={styles.spaceBetween}>
            <p className={styles.key}>IP Address</p>
            <CopyToClipboard text="165.242.111">
              <p
                className={[
                  styles.value,
                  styles.id,
                  copyIp && styles.copied,
                ].join(" ")}
              >
                <span>165.242.111</span>
                <RxCopy
                  className={styles.copyIcon}
                  onClick={() => {
                    setCopyIp(true);
                    setTimeout(() => setCopyIp(false), 300);
                  }}
                />
              </p>
            </CopyToClipboard>
          </div>{" "}
        </div>
      )}
    </div>
  );
};

export default Properties;
