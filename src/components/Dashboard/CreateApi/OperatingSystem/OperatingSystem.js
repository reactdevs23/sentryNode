import React, { useState } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BiChevronUp, BiChevronDown } from "react-icons/bi";
import {
  ubuntu,
  windows,
  centOS,
  debian,
  redHat,
  rocky,
} from "../../../../images/images";
import styles from "./OperatingSystem.module.css";

const OperatingSystem = ({ operatingSystems }) => {
  const [selectedOs, setSelectedOs] = useState(0);
  const [selectedVersion, setSelectedVersion] = useState(0);
  const [showDropdown, setShowDropDown] = useState(false);

  const operaingSystems = [
    {
      logo: ubuntu,
      name: "Ubuntu",
      versions: [
        {
          versionName: "Ubuntu 22.04",
          features: ["SSH Keys", "User Data", "RAID"],
          deploysIn: "15 seconds",
        },
        {
          versionName: "Ubuntu 18.04",
          features: ["SSH Keys", "User Data", "RAID"],
        },
      ],
    },
    {
      logo: windows,
      name: "Windows",
      versions: [
        {
          versionName: "Windows 22.04",
          features: ["SSH Keys", "User Data", "RAID"],
          deploysIn: "15 seconds",
        },
        {
          versionName: "Windows 18.04",
          features: ["SSH Keys", "User Data", "RAID"],
        },
      ],
    },
    {
      logo: centOS,
      name: "CentOS",
      versions: [
        {
          versionName: "CentOS 22.04",
          features: ["SSH Keys", "User Data", "RAID"],
          deploysIn: "15 seconds",
        },
        {
          versionName: "CentOS 18.04",
          features: ["SSH Keys", "User Data", "RAID"],
        },
      ],
    },
    {
      logo: debian,
      name: "Debian",
      versions: [
        {
          versionName: "Debian 22.04",
          features: ["SSH Keys", "User Data", "RAID"],
          deploysIn: "15 seconds",
        },
        {
          versionName: "Debian 18.04",
          features: ["SSH Keys", "User Data", "RAID"],
        },
      ],
    },
    {
      logo: redHat,
      name: "Red Hat",
      versions: [
        {
          versionName: "Red Hat 22.04",
          features: ["SSH Keys", "User Data", "RAID"],
          deploysIn: "15 seconds",
        },
        {
          versionName: "Red Hat 18.04",
          features: ["SSH Keys", "User Data", "RAID"],
        },
      ],
    },
    {
      logo: rocky,
      name: "Rocky",
      versions: [
        {
          versionName: "Rocky 22.04",
          features: ["SSH Keys", "User Data", "RAID"],
          deploysIn: "15 seconds",
        },
        {
          versionName: "Rocky 18.04",
          features: ["SSH Keys", "User Data", "RAID"],
        },
      ],
    },
  ];
  return (
    <div className={styles.operatingSystemContainer}>
      <h3 className={styles.title}>Operating System</h3>
      <div className={styles.operatingSystems}>
        {" "}
        {operaingSystems.map((os, i) => (
          <div
            key={i}
            className={[
              styles.operatingSystem,
              selectedOs === i && styles.selectedOs,
            ].join(" ")}
            onClick={() => setSelectedOs(i)}
          >
            <img src={os.logo} alt="#" className={styles.flag} />
            <p className={styles.name}>{os.name}</p>
          </div>
        ))}
      </div>
      <div className={styles.dropdownWrapper}>
        <div className={styles.labelContainer}>
          <p className={styles.label}>OS Version</p>
        </div>
        <div
          className={styles.versionContainer}
          onClick={() => {
            if (showDropdown) {
              setShowDropDown(false);
            } else {
              setShowDropDown(true);
            }
          }}
        >
          <p className={styles.version}>
            <img
              src={operaingSystems[selectedOs].logo}
              alt="#"
              className={styles.logo}
            />{" "}
            {operaingSystems[selectedOs].versions[selectedVersion].versionName}
            {operaingSystems[selectedOs].versions[selectedVersion]
              .deploysIn && (
              <span className={styles.deploysIn}>
                Deploys in{" "}
                {
                  operaingSystems[selectedOs].versions[selectedVersion]
                    .deploysIn
                }
              </span>
            )}
          </p>

          {showDropdown ? (
            <BiChevronUp className={styles.arrow} />
          ) : (
            <BiChevronDown className={styles.arrow} />
          )}

          {showDropdown && (
            <div className={styles.dropdownContainer}>
              {operaingSystems[selectedOs].versions.map((el, i) => (
                <div
                  key={i}
                  className={styles.dropdownItem}
                  onClick={() => {
                    setShowDropDown(false);
                    setSelectedVersion(i);
                  }}
                >
                  <p className={styles.dropdownContent}>
                    {" "}
                    <img
                      src={operaingSystems[selectedOs].logo}
                      alt="#"
                      className={styles.logo}
                    />{" "}
                    {el.versionName}{" "}
                  </p>
                  <div className={styles.features}>
                    {el.features.map((feature, index) => (
                      <p className={styles.feature} key={index}>
                        {feature}
                      </p>
                    ))}{" "}
                    {el.deploysIn && (
                      <p className={styles.deploysIn}>
                        Deploys in {el.deploysIn}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OperatingSystem;
