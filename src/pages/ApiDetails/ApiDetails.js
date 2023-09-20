import React from "react";
import Header from "../../components/Dashboard/ApiDetails/Header/Header";
import styles from "./ApiDetails.module.css";
import Credential from "../../components/Dashboard/ApiDetails/Credential/Credential";
import IpAssignment from "../../components/Dashboard/ApiDetails/IpAssignment/IpAssignment";
import BandwithUsage from "../../components/Dashboard/ApiDetails/BandwithUsage/BandwithUsage";
import Properties from "../../components/Dashboard/ApiDetails/Specification/Properties";
import Hardware from "../../components/Dashboard/ApiDetails/Specification/Hardware";
import MoreSpecefication from "../../components/Dashboard/ApiDetails/Specification/MoreSpecefication";

const ApiDetails = () => {
  return (
    <section className="mainContainer marginTop">
      <div className={styles.container}>
        <Header />
        <div className={styles.mainWrapper}>
          <div className={styles.wrapper}>
            <Credential />
            <BandwithUsage />
            <IpAssignment />
          </div>
          <div className={styles.speceficationContainer}>
            <Properties />
            <Hardware />
            <MoreSpecefication />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApiDetails;
