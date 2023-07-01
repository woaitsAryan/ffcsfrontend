import React from 'react';
import { useNavigate } from 'react-router-dom';
// import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import { ButtonProvider } from '../buttonContext';
import Styles from '../css/landing.module.css'

const Landing = () => {
 

  return (
    <div>
    <ButtonProvider>
      <Hero />
    </ButtonProvider>
    <p className={Styles['course-type']}>Course Type</p>
    </div>
  );
};

export default Landing;