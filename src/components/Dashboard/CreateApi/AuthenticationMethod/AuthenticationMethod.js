import React, { useState } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BiChevronUp, BiChevronDown } from "react-icons/bi";

import styles from "./AuthenticationMethod.module.css";

const AuthenticationMethod = ({ operatingSystems }) => {
  const [sshKey, setSshKey] = useState("");
  const [showDropdown, setShowDropDown] = useState(false);
  const allKeys = ["SshKey1", "SshKey2", "SshKey3", "SshKey4"];
  const filteredKeys = allKeys.filter((key) =>
    key.toLowerCase().includes(sshKey.toLowerCase())
  );

  return (
    <div className={styles.authenticationContainer}>
      <h3 className={styles.title}>Authentication Method</h3>

      <div className={styles.dropdownWrapper}>
        <div className={styles.labelContainer}>
          <p className={styles.label}>SSH keys</p>
          <AiOutlineInfoCircle className={styles.infoIcon} />
        </div>
        <div
          className={styles.inputContainer}
          onClick={() => {
            if (showDropdown) {
              setShowDropDown(false);
            } else {
              setShowDropDown(true);
            }
          }}
        >
          <input
            value={sshKey}
            onChange={(e) => {
              setSshKey(e.target.value);
              setShowDropDown(true);
            }} // Fixed this line
            className={styles.input}
            placeholder="Choose SSH keys"
          />

          {showDropdown ? (
            <BiChevronUp className={styles.arrow} />
          ) : (
            <BiChevronDown className={styles.arrow} />
          )}

          {showDropdown && filteredKeys.length !== 0 && (
            <div className={styles.dropdownContainer}>
              {filteredKeys.map((el, i) => (
                <div
                  key={i}
                  className={styles.dropdownItem}
                  onClick={() => {
                    setShowDropDown(false);
                    setSshKey(el);
                  }}
                >
                  <p className={styles.sshKey}>{el}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default AuthenticationMethod;
