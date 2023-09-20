import React from "react";
import { BiPlusCircle } from "react-icons/bi";
import styles from "./SecondProjects.module.css";
import { aceMako, bravo } from "../../../../images/images";
import SingleProject from "./SingleProject";

const SecondProjects = () => {
  const projects = [
    {
      id: "5343",
      image: aceMako,
      name: "AceMako",
      apis: "500",
      type: "On Demand",
      environment: "-",
    },
    {
      id: "5343",
      image: bravo,
      name: "Bravo",
      apis: "500",
      type: "On Demand",
      environment: "-",
    },
  ];
  return (
    <section className="mainContainer marginTop">
      <div className="mainWrapper">
        <div className={[styles.wrapper].join(" ")}>
          <div className={styles.topHeader}>
            <p className={styles.title}>Jeena</p>
            <button className={styles.button}>
              <BiPlusCircle className={styles.addIcon} />
              Create Project
            </button>
          </div>
          <div className={styles.tableContainer}>
            <table className={styles.table}>
              <tbody>
                <tr className={[styles.row].join(" ")}>
                  <th className={styles.heading}>ID</th>
                  <th className={styles.heading}>Project</th>
                  <th className={styles.heading}>Apis</th>
                  <th className={styles.heading}>Type </th>
                  <th className={styles.heading}>Environment </th>
                </tr>
                {projects.map((project, index) => (
                  <SingleProject {...project} key={index} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SecondProjects;
