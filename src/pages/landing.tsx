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
    <p className={Styles.title}>Course Type</p>
    <div className={`${Styles.courseTypeContainer} ${Styles.snapsInline}`}>
    <CourseType name='Discipline Core' imagePath='Flask Icon.svg'></CourseType>
    <CourseType name='Open Elective' imagePath='Gear Icon.svg'></CourseType>
    <CourseType name='Foundation Core' imagePath='Window Icon.svg'></CourseType>
    <CourseType name='Discipline Elective' imagePath='Hammer Icon.svg'></CourseType>
    <CourseType name='Discipline Linked Engineering Sciences' imagePath='Tools Icon.svg'></CourseType>
    <CourseType name='Non Graded Core Requirement' imagePath='Guitar Icon.svg'></CourseType>
    <CourseType name='Projects and Internship' imagePath='Shopping Basket.svg'></CourseType>
    
   
    </div>
    </div>
  );
};

export default Landing;