import React from "react";
import styles from "./AboutContainer.module.css";
import { FaGithub } from "react-icons/fa";

const AboutContainer = () => {
  return (
    <div className={styles.cardContainer}>
      <h4>Umut Can Gün</h4>
      <p>Full-Stack Developer</p>
      <p className="fs-6 w-75 text-center">
        A driven professional with a passion for learning and a knack for
        swiftly mastering new domains. With a background in Dentistry and strong
        foundations in mathematics seamlessly transitioned into software
        development.
      </p>
      <a
        href="https://github.com/ucangun"
        target="blank"
        className="text-dark fs-3"
      >
        <FaGithub />
      </a>
    </div>
  );
};

export default AboutContainer;
