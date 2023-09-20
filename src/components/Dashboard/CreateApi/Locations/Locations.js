import React, { useState } from "react";

import styles from "./Locations.module.css";

const Locations = ({ locations }) => {
  const [selectedLocation, setSelectedLocation] = useState(0);
  return (
    <div className={styles.locationContainer}>
      <h3 className={styles.title}>Location</h3>
      <div className={styles.locations}>
        {" "}
        {locations.map((location, i) => (
          <div
            key={i}
            className={[
              styles.location,
              selectedLocation === i && styles.selectedLocation,
            ].join(" ")}
            onClick={() => setSelectedLocation(i)}
          >
            <img src={location.flag} alt="#" className={styles.flag} />
            <p className={styles.name}>{location.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Locations;
