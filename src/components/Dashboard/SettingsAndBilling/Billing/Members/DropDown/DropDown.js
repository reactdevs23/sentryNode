import React, { useState } from "react";
import { BiChevronUp, BiChevronDown } from "react-icons/bi";
import styles from "./DropDown.module.css";

const DropDown = ({ role }) => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [selectedRole, setSelectedRole] = useState("");
  return (
    <div
      className={[
        styles.drpdownContainer,
        selectedRole && styles.roleSelected,
      ].join(" ")}
      onClick={() => {
        if (showDropDown) {
          setShowDropDown(false);
        } else {
          setShowDropDown(true);
        }
      }}
    >
      <p className={[styles.role].join(" ")}>
        {selectedRole ? selectedRole : "Role?"}
      </p>
      {showDropDown ? (
        <BiChevronUp className={styles.arrow} />
      ) : (
        <BiChevronDown className={styles.arrow} />
      )}

      {showDropDown && (
        <div className={styles.dropDown}>
          {role.map((type, i) => (
            <p
              className={styles.dropDownItem}
              key={i}
              onClick={() => {
                setSelectedRole(type);
                setShowDropDown(false);
              }}
            >
              {type}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDown;
