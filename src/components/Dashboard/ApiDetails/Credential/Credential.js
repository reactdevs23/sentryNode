import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { RxCopy } from "react-icons/rx";
import styles from "./Credential.module.css";

const Credential = () => {
  const [copyIp, setCopyIp] = useState(false);
  const [copyLoginSnippet, setCopyLoginSnippet] = useState(false);
  return (
    <div className={styles.wrapper}>
      <h4 className={styles.title}>Credentials</h4>
      <p className={styles.tagline}>Access credentials to your API</p>

      <div className={styles.infoBox}>
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
        <div className={styles.spaceBetween}>
          <p className={styles.key}>Username</p>
          <p className={styles.value}>root</p>
        </div>{" "}
        <div className={styles.spaceBetween}>
          <p className={styles.key}>SSH Key</p>
          <button className={styles.viewSshkeyButton}>View SSH Keys</button>
        </div>
        <div className={styles.spaceBetween}>
          <p className={styles.key}>Login Snippet</p>
          <CopyToClipboard text="ssh root@165.242.111">
            <p
              className={[
                styles.value,
                styles.id,
                copyLoginSnippet && styles.copied,
              ].join(" ")}
            >
              <span>ssh root@165.242.111</span>
              <RxCopy
                className={styles.copyIcon}
                onClick={() => {
                  setCopyLoginSnippet(true);
                  setTimeout(() => setCopyLoginSnippet(false), 300);
                }}
              />
            </p>
          </CopyToClipboard>
        </div>{" "}
      </div>
    </div>
  );
};

export default Credential;
