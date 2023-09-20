import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { AiOutlineAlignRight } from "react-icons/ai";
import { BiChevronUp, BiChevronDown } from "react-icons/bi";
import { MdOutlineClose } from "react-icons/md";
import Sidebar from "./Sidebar/Sidebar";

import { userImage } from "../../../images/images";
import styles from "./Header.module.css";

const Header = () => {
  const navigate = useNavigate("/login");
  const [dropdown, setDropdown] = useState(false);
  const [sidebar, setSidebar] = useState(false);

  return (
    <>
      <Sidebar sidebar={sidebar} setSidebar={setSidebar} />

      <div className={styles.headerWrapper}>
        <div className={styles.header}>
          <div className={styles.searchContainer}>
            <BiSearch className={styles.searchIcon} />
            <input
              type="text"
              placeholder="Find the Server"
              className={styles.input}
            />
          </div>
          <div className={styles.hamburgerAndUsercontainer}>
            <div
              className={styles.userContainer}
              onClick={() => setDropdown((prev) => !prev)}
            >
              <img src={userImage} alt="#" className={styles.userName} />
              <p className={styles.userName}>Anna Williams</p>
              {dropdown ? (
                <BiChevronUp className={styles.arrow} />
              ) : (
                <BiChevronDown className={styles.arrow} />
              )}
              {dropdown && (
                <div
                  className={styles.dropDown}
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  <p className={styles.logoutButton}>Logout</p>
                </div>
              )}
            </div>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
