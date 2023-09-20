import React, { useState } from "react";
import { BiSolidChevronUp, BiSolidChevronDown } from "react-icons/bi";
import { TbSmartHome, TbTopologyStar } from "react-icons/tb";

import { FiSettings } from "react-icons/fi";
import { RiRouteFill } from "react-icons/ri";
import { BsBarChart } from "react-icons/bs";
import { LuSettings2 } from "react-icons/lu";

import { HiOutlineSupport } from "react-icons/hi";
import { TiDocumentText } from "react-icons/ti";

import styles from "./Sidebar.module.css";

import { NavLink } from "react-router-dom";
import { aceMako, bravo, logo } from "../../../../images/images";

const Sidebar = ({ sidebar, setSidebar }) => {
  const [showAllProjects, setShowAllProjects] = useState(true);

  const projects = [
    { image: aceMako, name: "AceMako", to: "/AceMako" },
    { image: bravo, name: "Bravo", to: "/Bravo" },
  ];
  const navItems = [
    {
      icon: <TbSmartHome className={styles.navIcon} />,
      navItem: "Home ",
      to: "/dashboard",
    },
    {
      icon: <TbTopologyStar className={styles.navIcon} />,
      navItem: "APIs",
      to: "/apis",
    },
    {
      icon: <FiSettings className={styles.navIcon} />,
      navItem: "Settings & Billing",
      to: "/settings&billing",
    },
    {
      icon: <RiRouteFill className={styles.navIcon} />,
      navItem: "IP Addresses",
      to: "/ipaddresses",
    },
    {
      icon: <BsBarChart className={styles.navIcon} />,
      navItem: "Usage",
      to: "/usage",
    },
    {
      icon: <LuSettings2 className={styles.navIcon} />,
      navItem: "Project Settings",
      to: "/projectsettings",
    },
  ];

  return (
    <section
      className={[styles.sidebar, sidebar && styles.showSidebar].join(" ")}
    >
      <div className={styles.teamContainer}>
        <div className={styles.imageAndDetails}>
          {" "}
          <img src={logo} alt="#" className={styles.logo} />
          <div className={styles.details}>
            <p className={styles.teamName}>Team Name</p>
            <p className={styles.name}>Jeena</p>
          </div>
        </div>{" "}
        <BiSolidChevronUp className={styles.arrow} />
      </div>
      <div className={styles.navWrapper}>
        <div
          className={[styles.navHeader].join(" ")}
          onClick={() => setShowAllProjects((prev) => !prev)}
        >
          <h5 className={styles.navHeading}>Project</h5>

          {showAllProjects ? (
            <BiSolidChevronUp className={styles.arrow} />
          ) : (
            <BiSolidChevronDown className={styles.arrow} />
          )}
        </div>
        {showAllProjects && (
          <div className={styles.projects}>
            {projects.map((project, i) => (
              <NavLink
                to={project.to}
                key={i}
                className={({ isActive }) =>
                  isActive
                    ? [styles.project, styles.activeProject].join(" ")
                    : [styles.project].join(" ")
                }
                onClick={() => setSidebar((prev) => !prev)}
              >
                <img
                  src={project.image}
                  alt="#"
                  className={styles.projectImage}
                />
                <span>{project.name}</span>
              </NavLink>
            ))}
          </div>
        )}
      </div>
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
      <div className={styles.supportAndDocumentation}>
        <NavLink
          to="/Support"
          className={({ isActive }) =>
            isActive
              ? [styles.support, styles.activeTab].join(" ")
              : styles.support
          }
          onClick={() => setSidebar((prev) => !prev)}
        >
          <HiOutlineSupport className={styles.navIcon} />
          <span>Support</span>
        </NavLink>{" "}
        <NavLink
          to="/documentation"
          className={({ isActive }) =>
            isActive
              ? [styles.documentation, styles.activeTab].join(" ")
              : styles.documentation
          }
          onClick={() => setSidebar((prev) => !prev)}
        >
          <TiDocumentText className={styles.navIcon} />
          <span>Documentation</span>
        </NavLink>
      </div>
    </section>
  );
};

export default Sidebar;
