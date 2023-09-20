import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import styles from "./HostNames.module.css";

const HostNames = () => {
  const [hostName, setHosetName] = useState("");
  const [hostName2, setHosetName2] = useState("");
  const [quantity, setQuantity] = useState(1);
  const increase = () => {
    setQuantity((prev) => prev + 1);
  };
  const decrease = () => {
    if (quantity > 0) {
      setQuantity((prev) => prev - 1);
    }
  };
  return (
    <div className={styles.hostNamesContainer}>
      <h3 className={styles.title}>Hostnames</h3>

      <div className={styles.wrapper}>
        <div className={styles.quantityContainer}>
          <div className={styles.textContainer}>
            <p className={styles.heading}>Quantity</p>
            <p className={styles.text}>
              Deploy multiple with the same configuration.
            </p>
          </div>

          <div className={styles.quantityWrapper}>
            <div className={styles.iconContainer} onClick={decrease}>
              <AiOutlineMinus className={styles.icon} />
            </div>{" "}
            <p className={styles.quantity}>{quantity}</p>
            <div className={styles.iconContainer} onClick={increase}>
              <AiOutlinePlus className={styles.icon} />
            </div>
          </div>
        </div>
        <div className={styles.hostNameContainer}>
          {" "}
          <div className={styles.textContainer}>
            <p className={styles.heading}>Hostname</p>
            <p className={styles.text}>
              Give your identifying name you will remember them by.
            </p>
          </div>
          <div className={styles.inputContainer}>
            <input
              type="text"
              name="hostName"
              value={hostName}
              onChange={(e) => setHosetName(e.target.value)}
              className={styles.input}
              placeholder="ubuntu-s-2vcpu-4gb-120gb-intel-sfo3-01"
            />{" "}
            <input
              type="text"
              name="hostName2"
              value={hostName2}
              onChange={(e) => setHosetName2(e.target.value)}
              className={styles.input}
              placeholder="ubuntu-s-2vcpu-4gb-120gb-intel-sfo3-01"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostNames;
