import React from 'react';
import { useNavigate } from 'react-router-dom';
// import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import { ButtonProvider } from '../buttonContext';
import Styles from '../css/landing.module.css'
import CourseType from '../components/CourseType';


const Landing = () => {
 

  return (
    <div>
    <ButtonProvider>
      <Hero />
    </ButtonProvider>
    <p className={Styles['course-type']}>Course Type</p>
    <div className={Styles['courseTypeContainer']}>
    <CourseType name='Discipline Core' imagePath='Flask Icon.svg'></CourseType>
    <CourseType name=' Open Elective' imagePath='Gear Icon.svg'></CourseType>
    </div>
    </div>
  );
};

export default Landing;