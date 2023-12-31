import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../css/hero.module.css";
import Navbar from "./Navbar";
const Hero = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/auth");
  };

  const handleRegister = () => {
    navigate("/auth");
  };

  return (
    <div className={styles.mainContainer}>
      <Navbar />
      <div className={styles.heroContainer}>
        <div className={styles.heroContainerInfo}>
          <h1>
            FFCS <span>Planner</span>
          </h1>
          <p className={styles.heroInfo}>
            We help you plan your next semester in VIT with an easy and flexible
            FFCS planner.
          </p>
        </div>
        <img src="heroImg.svg" className={styles.heroImg} alt="Hero Section" />
      </div>
    </div>
  );
};

export default Hero;
