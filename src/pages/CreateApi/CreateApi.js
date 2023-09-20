import React from "react";
import { useNavigate } from "react-router-dom";
import {
  germanyFlag,
  saoPauloFlag,
  tokyoFlag,
  ukFlag,
  usaFlag,
} from "../../images/images";
import Servers from "./../../components/Dashboard/CreateApi/Servers/Servers";
import Locations from "./../../components/Dashboard/CreateApi/Locations/Locations";
import OperatingSystem from "../../components/Dashboard/CreateApi/OperatingSystem/OperatingSystem";
import HostNames from "../../components/Dashboard/CreateApi/HostNames/HostNames";
import AuthenticationMethod from "../../components/Dashboard/CreateApi/AuthenticationMethod/AuthenticationMethod";
import styles from "./CreateApi.module.css";

const CreateApi = () => {
  const navigate = useNavigate();
  const servers = [
    {
      name: "c2.micro.x64",
      details:
        "E-2386G, 6 Cores @ 3.5 GHz   32 GB RAM   800 GB NVME   10 Gbps NIC",
      price: "$8",
    },
    {
      name: "c2.micro.x64",
      details:
        "E-2386G, 6 Cores @ 3.5 GHz   32 GB RAM   800 GB NVME   10 Gbps NIC",
      price: "$16",
    },
    {
      name: "c2.micro.x64",
      details:
        "E-2386G, 6 Cores @ 3.5 GHz   32 GB RAM   800 GB NVME   10 Gbps NIC",
      price: "$16",
    },
    {
      name: "c2.micro.x64",
      details:
        "E-2386G, 6 Cores @ 3.5 GHz   32 GB RAM   800 GB NVME   10 Gbps NIC",
      price: "$32",
    },
  ];

  const locations = [
    { flag: ukFlag, name: "London" },
    { flag: saoPauloFlag, name: "São Paulo" },
    { flag: germanyFlag, name: "Germany" },
    { flag: usaFlag, name: "Los Angeles" },
    { flag: usaFlag, name: "Ashburn" },
    { flag: tokyoFlag, name: "Tokyo" },
    { flag: usaFlag, name: "Miami" },
    { flag: usaFlag, name: "New York" },
  ];

  return (
    <section className="mainContainer marginTop">
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Create API</h2>
        <Servers servers={servers} />
        <Locations locations={locations} />
        <OperatingSystem />
        <AuthenticationMethod />
        <HostNames />
        <div className={styles.createApi}>
          <p className={styles.estimatePrice}>
            <span className={styles.est}>Est.</span>$8
            <span className={styles.period}>/Month</span>
          </p>
          <button
            className={styles.button}
            onClick={() => navigate("/apiDetails")}
          >
            Create API
          </button>
        </div>
      </div>
    </section>
  );
};

export default CreateApi;
