import React from "react";
import MyNavbar from "../components/MyNavbar";
import AboutContainer from "../components/AboutContainer";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <MyNavbar />
      <div className={styles.aboutContainer}>
        <AboutContainer />
      </div>
    </div>
  );
};

export default About;
