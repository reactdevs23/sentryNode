import React, { useState } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { logo } from "../../images/images";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const deployInfo = [
    "Lörem ipsum menskopp parasport",
    "Trek häs har somögt Lörem ipsum menskopp ",
    "Menskopp parasport. Trek häs har somögt. ",
  ];
  return (
    <section className={styles.mainWrapper}>
      <div className={styles.deployInfo}>
        <h3 className={styles.title}>Deploy Api in minutes</h3>

        <div className={styles.infoWrapper}>
          {deployInfo.map((el, i) => (
            <p className={styles.info} key={i}>
              <BsCheckCircleFill className={styles.circleCheck} /> {el}
            </p>
          ))}
        </div>
      </div>

      <div className={styles.wrapper}>
        <div className={styles.logoContainer}>
          <img src={logo} alt="#" className={styles.logo} />
          <h4 className={styles.logoText}>Sentry Node</h4>
        </div>
        <div className={styles.container}>
          <h4 className={styles.heading}>
            Sign Up and start deploying api in minutes
          </h4>
          <div className={styles.inputWrapper}>
            <label htmlFor="email" className={styles.label}>
              Email Address
            </label>
            <div className={styles.inputContainer}>
              {" "}
              <input
                id="email"
                name="email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                className={styles.input}
              />
            </div>
          </div>{" "}
          <button className={styles.submitButton}>Submit</button>
          <p className={styles.or}>Or </p>
          <button className={styles.continueWithButton}>
            <FcGoogle className={styles.icon} />
            Continue with Google
          </button>
          <p className={styles.text}>
            Already have an account?{" "}
            <Link to="/login" className={styles.highlight}>
              Login
            </Link>
          </p>
          <p className={[styles.text, styles.privacyPolicy].join(" ")}>
            By Clicking continue, you agree to our{" "}
            <a
              href="#/"
              target="_blank"
              rel="noreferrer"
              className={styles.highlight}
            >
              Terms of Service
            </a>{" "}
            and{" "}
            <a
              href="#/"
              target="_blank"
              rel="noreferrer"
              className={styles.highlight}
            >
              Privacy Policy
            </a>{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
