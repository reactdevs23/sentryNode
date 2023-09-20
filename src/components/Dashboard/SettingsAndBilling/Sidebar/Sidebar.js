import React from "react";
import { NavLink } from "react-router-dom";
import { TbReceipt } from "react-icons/tb";
import { CiMoneyBill } from "react-icons/ci";
import { FiSettings } from "react-icons/fi";
import { HiOutlineKey } from "react-icons/hi";
import { PiCursorClick } from "react-icons/pi";
import { LuUsers2 } from "react-icons/lu";

import styles from "./Sidebar.module.css";

const Sidebar = ({ sidebar, setSidebar }) => {
  const navItems = [
    {
      icon: <CiMoneyBill className={styles.navIcon} />,
      navItem: "Billing ",
      to: "billing",
    },
    {
      icon: <TbReceipt className={styles.navIcon} />,
      navItem: "Invoices",
      to: "invoices",
    },
    {
      icon: <LuUsers2 className={styles.navIcon} />,
      navItem: "Members",
      to: "members",
    },
    {
      icon: <HiOutlineKey className={styles.navIcon} />,
      navItem: "API Keys",
      to: "apiKeys",
    },
    {
      icon: <PiCursorClick className={styles.navIcon} />,
      navItem: "Referrals",
      to: "referrals",
    },
    {
      icon: <FiSettings className={styles.navIcon} />,
      navItem: "Settings",
      to: "settings",
    },
  ];

  return (
    <div className={[styles.sidebar, sidebar && styles.showSidebar].join(" ")}>
      <div className={styles.navItems}>
        {navItems.map((el, i) => (
          <NavLink
            to={el.to}
            key={i}
            className={({ isActive }) =>
              isActive
                ? [styles.navItem, styles.navActive].join(" ")
                : styles.navItem
            }
            onClick={() => setSidebar((prev) => !prev)}
          >
            {el.icon}
            <span>{el.navItem}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
