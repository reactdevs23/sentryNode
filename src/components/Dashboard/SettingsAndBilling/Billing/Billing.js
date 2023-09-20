import React, { useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import CurrenBillingCycle from "./CurrenBillingCycle/CurrenBillingCycle";
import styles from "./Billing.module.css";

const Billing = () => {
  const [coupon, setCoupon] = useState("");
  const [taxIdType, setTaxIdType] = useState("");
  const [taxNumber, setTaxNumber] = useState("");

  const [showDropDown, setShowDropDown] = useState(false);

  const allTaxIdType = ["TaxIdType1", "TaxIdType2", "TaxIdType3", "TaxIdType4"];

  return (
    <div className={styles.mainWrapper}>
      <div className={[styles.wrapper, styles.billing].join(" ")}>
        <h4 className={styles.heading}>Billing</h4>

        <div className={styles.inputWrapper}>
          <label htmlFor="coupon" className={styles.label}>
            Coupon
          </label>
          <div className={styles.inputContainer}>
            <input
              id="coupon"
              name="coupon"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
              type="text"
              placeholder="Enter Coupon Code"
              className={styles.input}
            />
            <button className={[styles.button, styles.applyButton].join(" ")}>
              Apply
            </button>
          </div>
        </div>
      </div>
      <div className={[styles.wrapper].join(" ")}>
        <div className={styles.textWrapper}>
          <p className={styles.subHeading}> Tax ID</p>

          <p className={styles.text}>
            Enter your Tax ID if you need it on invoices
          </p>

          <div className={styles.taxIdAndNumber}>
            <div
              className={styles.taxIdContainer}
              onClick={() => {
                if (showDropDown) {
                  setShowDropDown(false);
                } else {
                  setShowDropDown(true);
                }
              }}
            >
              <p
                className={[
                  styles.taxId,
                  !taxIdType && styles.selectIdType,
                ].join(" ")}
              >
                {taxIdType ? taxIdType : "Select an ID Type"}
              </p>
              {showDropDown ? (
                <BiChevronUp className={styles.arrow} />
              ) : (
                <BiChevronDown className={styles.arrow} />
              )}

              {showDropDown && (
                <div className={styles.dropDown}>
                  {allTaxIdType.map((type, i) => (
                    <p
                      className={styles.dropDownItem}
                      key={i}
                      onClick={() => {
                        setTaxIdType(type);
                        setShowDropDown(false);
                      }}
                    >
                      {type}
                    </p>
                  ))}
                </div>
              )}
            </div>
            <div className={styles.inputContainer}>
              <input
                id="taxNumber"
                name="taxNumber"
                value={taxNumber}
                onChange={(e) => setTaxNumber(e.target.value)}
                type="text"
                placeholder="Tax Number"
                className={styles.input}
              />
            </div>
          </div>
          <button className={styles.button}>Save</button>
        </div>
      </div>
      <CurrenBillingCycle />
    </div>
  );
};

export default Billing;
