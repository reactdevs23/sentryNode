import React, { useState } from "react";
import { BsChevronLeft } from "react-icons/bs";
import { logo } from "../../images/images";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };
  return (
    <section className={styles.loginContainer}>
      <div className={styles.backContainer} onClick={() => navigate(-1)}>
        <div className={styles.backIconContainer}>
          <BsChevronLeft className={styles.backIcon} />
        </div>
        <p className={styles.backText}>Back</p>
      </div>
      <div className={[styles.wrapper, styles.loginWrapper].join(" ")}>
        <div className={styles.logoContainer}>
          <img src={logo} alt="#" className={styles.logo} />
          <h4 className={styles.logoText}>Sentry Node</h4>
        </div>
        <form></form>
        <form action="" className={styles.container} onSubmit={handleSubmit}>
          <h4 className={[styles.heading, styles.passwordHeading].join(" ")}>
            Enter the Password
          </h4>
          <div className={styles.inputWrapper}>
            <label htmlFor="password" className={styles.label}>
              Password
            </label>
            <div className={styles.inputContainer}>
              {" "}
              <input
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Email Address"
                className={styles.input}
              />
            </div>
          </div>{" "}
          <button type="submit" className={styles.submitButton}>
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;
