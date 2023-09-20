import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import styles from "./Footer.module.css";

const Footer = () => {
  const socials = [
    { icon: <FaFacebookF className={styles.icon} />, to: "#" },
    { icon: <FaTwitter className={styles.icon} />, to: "#" },
    { icon: <FaYoutube className={styles.icon} />, to: "#" },
  ];
  return (
    <section className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.linkContainer}>
          <p className={styles.heading}>Products</p>
          <div className={styles.links}>
            {" "}
            <a
              href="www.google.com"
              target="_blank"
              rel="noreferrer"
              className={styles.link}
            >
              Previews
            </a>
            <a
              href="#/"
              target="_blank"
              rel="noreferrer"
              className={styles.link}
            >
              Infrastructure Turbo
            </a>
            <a
              href="#/"
              target="_blank"
              rel="noreferrer"
              className={styles.link}
            >
              Edge Functions Analytics
            </a>
            <a
              href="#/"
              target="_blank"
              rel="noreferrer"
              className={styles.link}
            >
              CLI & API Changelog
            </a>
          </div>
        </div>{" "}
        <div className={styles.linkContainer}>
          <p className={styles.heading}>Resources</p>
          <div className={styles.linkWrapper}>
            <div className={styles.links}>
              <a
                href="#/"
                target="_blank"
                rel="noreferrer"
                className={styles.link}
              >
                Docs
              </a>
              <a
                href="#/"
                target="_blank"
                rel="noreferrer"
                className={styles.link}
              >
                Pricing
              </a>
              <a
                href="#/"
                target="_blank"
                rel="noreferrer"
                className={styles.link}
              >
                Customers
              </a>
              <a
                href="#/"
                target="_blank"
                rel="noreferrer"
                className={styles.link}
              >
                Integrations
              </a>
            </div>{" "}
            <div className={styles.links}>
              <a
                href="#/"
                target="_blank"
                rel="noreferrer"
                className={styles.link}
              >
                Guides
              </a>
              <a
                href="#/"
                target="_blank"
                rel="noreferrer"
                className={styles.link}
              >
                Experts
              </a>
              <a
                href="#/"
                target="_blank"
                rel="noreferrer"
                className={styles.link}
              >
                Customer Support
              </a>
            </div>
          </div>
        </div>{" "}
        <div
          className={[styles.linkContainer, styles.companyLinkContainer].join(
            " "
          )}
        >
          <p className={styles.heading}>Company</p>
          <div className={styles.linkWrapper}>
            <div className={styles.links}>
              <a
                href="#/"
                target="_blank"
                rel="noreferrer"
                className={styles.link}
              >
                About Us
              </a>
              <a
                href="#/"
                target="_blank"
                rel="noreferrer"
                className={styles.link}
              >
                Careers
              </a>
              <a
                href="#/"
                target="_blank"
                rel="noreferrer"
                className={styles.link}
              >
                Partners
              </a>
              <a
                href="#/"
                target="_blank"
                rel="noreferrer"
                className={styles.link}
              >
                Privacy Policy
              </a>
            </div>{" "}
            <div className={styles.links}>
              <a
                href="#/"
                target="_blank"
                rel="noreferrer"
                className={styles.link}
              >
                Terms and Conditions
              </a>
              <a
                href="#/"
                target="_blank"
                rel="noreferrer"
                className={styles.link}
              >
                Blog
              </a>
              <a
                href="#/"
                target="_blank"
                rel="noreferrer"
                className={styles.link}
              >
                Open Source
              </a>
              <a
                href="#/"
                target="_blank"
                rel="noreferrer"
                className={styles.link}
              >
                Security
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.spaceBetween}>
        <p className={[styles.rightReserved, styles.link].join(" ")}>
          © 2023 Sentry Node, All Rights Reserved.
        </p>

        <div className={styles.socialContainer}>
          {socials.map((social, i) => (
            <a
              href={social.to}
              target="_blank"
              rel="noreferrer"
              className={styles.iconContainer}
              key={i}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
