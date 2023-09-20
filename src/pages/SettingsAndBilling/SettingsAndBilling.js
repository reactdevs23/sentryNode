import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AiOutlineAlignRight } from "react-icons/ai";
import { MdOutlineClose } from "react-icons/md";
import Sidebar from "../../components/Dashboard/SettingsAndBilling/Sidebar/Sidebar";
import Billing from "../../components/Dashboard/SettingsAndBilling/Billing/Billing";
import styles from "./SettingsAndBilling.module.css";
import Invoices from "../../components/Dashboard/SettingsAndBilling/Billing/Invoices/Invoices";
import Members from "../../components/Dashboard/SettingsAndBilling/Billing/Members/Members";
import ApiKeys from "../../components/Dashboard/SettingsAndBilling/Billing/ApiKeys/ApiKeys";
import Referrel from "../../components/Dashboard/SettingsAndBilling/Billing/Referrels/Referrel";
import Settigs from "../../components/Dashboard/SettingsAndBilling/Billing/Settings/Settings";
const SettingsAndBilling = () => {
  const [sidebar, setSidebar] = useState(false);
  return (
    <div className="mainContainer marginTop ">
      <div className={styles.wrapper}>
        {sidebar ? (
          <MdOutlineClose
            className={styles.hamburger}
            onClick={() => setSidebar((prev) => !prev)}
          />
        ) : (
          <AiOutlineAlignRight
            className={styles.hamburger}
            onClick={() => setSidebar((prev) => !prev)}
          />
        )}
        <Sidebar sidebar={sidebar} setSidebar={setSidebar} />

        <Routes>
          <Route path="/" element={<Navigate to="billing" />} />
          <Route path="/billing" element={<Billing />} />{" "}
          <Route path="/invoices" element={<Invoices />} />
          <Route path="/members" element={<Members />} />
          <Route path="/apikeys" element={<ApiKeys />} />
          <Route path="/referrals" element={<Referrel />} />
          <Route path="/settings" element={<Settigs />} />
        </Routes>
      </div>
    </div>
  );
};

export default SettingsAndBilling;
