import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { RxCopy } from "react-icons/rx";
import styles from "./Referrel.module.css";

const Referrel = () => {
  const [copyId, setCopyId] = useState(false);
  return (
    <div className={styles.wrapper}>
      <div>
        <h4 className={styles.heading}>Referrals</h4>
        <p className={styles.text}>
          Get $200 in credits for each person you refer to Sentry Node{" "}
          <a
            href="https://www.latitude.sh/r/85B27A87"
            target="_blank"
            rel="noreferrer"
            className={styles.learnMore}
          >
            Learn More
          </a>
        </p>
      </div>
      <CopyToClipboard text="https://www.latitude.sh/r/85B27A87">
        <div
          className={[styles.referelContainer, copyId && styles.copied].join(
            " "
          )}
        >
          {" "}
          <p className={styles.refferel}>https://www.latitude.sh/r/85B27A87</p>
          <RxCopy
            className={styles.copyIcon}
            onClick={() => {
              setCopyId(true);
              setTimeout(() => setCopyId(false), 300);
            }}
          />
        </div>
      </CopyToClipboard>
    </div>
  );
};

export default Referrel;
