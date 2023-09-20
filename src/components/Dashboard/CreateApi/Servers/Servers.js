import React, { useState } from "react";
import { TbServer } from "react-icons/tb";
import styles from "./Servers.module.css";

const Server = ({ servers }) => {
  const [selectedServer, setSelectedServer] = useState(0);
  return (
    <div className={styles.serverContainer}>
      <h3 className={styles.title}>Server</h3>
      <div className={styles.servers}>
        {" "}
        {servers.map((server, i) => (
          <div
            key={i}
            className={[
              styles.server,
              selectedServer === i && styles.selectedServer,
            ].join(" ")}
            onClick={() => setSelectedServer(i)}
          >
            <div className={styles.serverDetails}>
              <div className={styles.iconContainer}>
                <TbServer className={styles.icon} />
              </div>
              <div className={styles.nameAndDetails}>
                <p className={styles.name}>{server.name}</p>
                <p className={styles.details}>{server.details}</p>
              </div>
            </div>
            <p className={styles.price}>
              {server.price}
              <span className={styles.period}>/Month</span>{" "}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Server;
