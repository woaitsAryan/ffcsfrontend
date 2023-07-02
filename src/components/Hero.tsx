import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../css/hero.module.css';
import Navbar from './Navbar';
const Hero = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
      navigate('/auth');
    };
  
    const handleRegister = () => {
      navigate('/auth');
    };


return (
  <div className={styles.mainContainer}>
      <div className={styles.heroContainer}>
        <div className={styles.heroContainerInfo}>
          <h1>FFCS</h1>
          <h1 className={styles.planner}>Planner</h1>
          <p className={styles.heroInfo}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua
          </p>
        </div>
        <img src="heroImg.svg" className={styles.heroImg} alt="Hero Image" />
      </div>
    </div>
);
};

export default Hero;
