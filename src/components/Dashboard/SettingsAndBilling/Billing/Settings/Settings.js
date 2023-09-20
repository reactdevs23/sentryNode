import React, { useState } from "react";
import styles from "./Settings.module.css";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

const Settigs = () => {
  const [teamName, setTeamName] = useState("Jeena");
  const [address, setAddress] = useState("");
  const [cityName, setCityName] = useState("");

  const [firstState, setFirstState] = useState("");
  const [secondState, setSecondState] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [showDropDown, setShowDropDown] = useState(false);

  const countryNames = ["USA", "UK", "Germany", "Russia"];

  return (
    <div className={styles.mainWrapper}>
      <div className={[styles.wrapper, styles.billing].join(" ")}>
        <h4 className={styles.heading}>Settings</h4>

        <div className={styles.inputWrapper}>
          <label htmlFor="coupon" className={styles.label}>
            Team name
          </label>
          <div className={styles.inputContainer}>
            <input
              id="coupon"
              name="coupon"
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
              type="text"
              placeholder="TeamName"
              className={styles.input}
            />
            <button className={[styles.button, styles.applyButton].join(" ")}>
              Apply
            </button>
          </div>
        </div>
      </div>
      <div className={[styles.wrapper, styles.addressContainer].join(" ")}>
        <div className={styles.textWrapper}>
          <p className={styles.subHeading}> Address</p>

          <p className={styles.text}>
            Enter your Tax ID if you need it on invoices
          </p>

          <div className={styles.addressAndCity}>
            <div className={styles.inputContainer}>
              <input
                id="address"
                name="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                type="text"
                placeholder="Address"
                className={styles.input}
              />
            </div>
            <div className={styles.inputContainer}>
              <input
                id="cityName"
                name="cityName"
                value={cityName}
                onChange={(e) => setCityName(e.target.value)}
                type="text"
                placeholder="City"
                className={styles.input}
              />
            </div>
          </div>
          <div className={styles.statesAndCountry}>
            <div className={styles.inputContainer}>
              <input
                id="firstState"
                name="firstState"
                value={firstState}
                onChange={(e) => setFirstState(e.target.value)}
                type="text"
                placeholder="State"
                className={styles.input}
              />
            </div>
            <div className={styles.inputContainer}>
              <input
                id="secondState"
                name="secondState"
                value={secondState}
                onChange={(e) => setSecondState(e.target.value)}
                type="text"
                placeholder="State"
                className={styles.input}
              />
            </div>
            <div
              className={styles.countryNameContainer}
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
                  styles.country,
                  !selectedCountry && styles.selectIdType,
                ].join(" ")}
              >
                {selectedCountry ? selectedCountry : "Country"}
              </p>
              {showDropDown ? (
                <BiChevronUp className={styles.arrow} />
              ) : (
                <BiChevronDown className={styles.arrow} />
              )}

              {showDropDown && (
                <div className={styles.dropDown}>
                  {countryNames.map((type, i) => (
                    <p
                      className={styles.dropDownItem}
                      key={i}
                      onClick={() => {
                        setSelectedCountry(type);
                        setShowDropDown(false);
                      }}
                    >
                      {type}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>
          <button className={styles.button}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default Settigs;
