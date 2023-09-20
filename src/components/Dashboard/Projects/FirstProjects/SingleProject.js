import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { RxCopy } from "react-icons/rx";
import styles from "./Projects.module.css";
const SingleProject = ({ id, image, name, apis, type, environment }) => {
  const [copyId, setCopyId] = useState(false);
  return (
    <tr className={styles.row}>
      <td
        className={[styles.item, styles.projectImageAndNameContainer].join(" ")}
      >
        <div className={styles.projectImageAndName}>
          <img src={image} alt="#" className={styles.projectImage} />
          <p className={styles.name}>{name}</p>
        </div>
      </td>
      <td className={styles.item}>{apis}</td>{" "}
      <td className={styles.item}>
        <p className={styles.type}>{type}</p>
      </td>{" "}
      <td className={styles.item}>
        <div className={styles.environmentContainer}>
          <p className={styles.environment}>{environment}</p>
        </div>
      </td>
      <td className={styles.item}>
        <CopyToClipboard text={id}>
          <div className={styles.idContainer}>
            <p className={[styles.id, copyId && styles.copied].join(" ")}>
              {id}{" "}
              <RxCopy
                className={styles.copyIcon}
                onClick={() => {
                  setCopyId(true);
                  setTimeout(() => setCopyId(false), 300);
                }}
              />
            </p>{" "}
          </div>
        </CopyToClipboard>
      </td>
    </tr>
  );
};

export default SingleProject;
