import React, { useState } from "react";

import { BiChevronDown } from "react-icons/bi";

import { CopyToClipboard } from "react-copy-to-clipboard";
import { RxCopy } from "react-icons/rx";
import styles from "./styles.module.css";
import { aceMako } from "../../../../images/images";

const MoreSpecefication = () => {
  const [showSpecefication, setShowSpecefication] = useState(true);
  const [copyProjectId, setCopyProjectId] = useState(false);
  return (
    <div className={styles.wrapper}>
      <div className={styles.titleContainer}>
        <h4
          className={styles.title}
          onClick={() => setShowSpecefication((prev) => !prev)}
        >
          More
        </h4>
        <BiChevronDown
          className={styles.arrow}
          onClick={() => setShowSpecefication((prev) => !prev)}
        />
      </div>
      {showSpecefication && (
        <div className={styles.infoBox}>
          <div className={styles.spaceBetween}>
            <p className={styles.key}>Created at</p>{" "}
            <p className={styles.value}>Sep 13, 2023</p>
          </div>{" "}
          <div className={styles.spaceBetween}>
            <p className={styles.key}>Project ID</p>
            <CopyToClipboard text="5343">
              <p
                className={[
                  styles.value,
                  styles.id,
                  copyProjectId && styles.copied,
                ].join(" ")}
              >
                <span>5343</span>
                <RxCopy
                  className={styles.copyIcon}
                  onClick={() => {
                    setCopyProjectId(true);
                    setTimeout(() => setCopyProjectId(false), 300);
                  }}
                />
              </p>
            </CopyToClipboard>
          </div>{" "}
          <div className={styles.spaceBetween}>
            <p className={styles.key}>Project Name</p>{" "}
            <div className={styles.valueContainer}>
              <img src={aceMako} alt="#" className={styles.projectImage} />
              <p className={styles.value}>AceMako</p>
            </div>
          </div>{" "}
        </div>
      )}
    </div>
  );
};

export default MoreSpecefication;
