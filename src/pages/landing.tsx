import React from "react";
import { useNavigate } from "react-router-dom";
// import Navbar from '../components/Navbar';
import Hero from "../components/Hero";
import { ButtonProvider } from "../buttonContext";
import Styles from "../css/landing.module.css";
import CourseType from "../components/CourseType";
import Slots from "../components/Slots";
import Timetable from "../components/Timetable";
import Footer from "../components/Footer";
import SubjectSelection from "../components/SubjectSelection";
const Landing = () => {
  return (
    <div>
      <div className={Styles.mainflexbox}>
        <ButtonProvider>
          <Hero />
        </ButtonProvider>
      </div>
      <div className={Styles.mainflexbox2}>
        <p className={Styles.title}>Course Type</p>

        <div className={`${Styles.courseTypeContainer} ${Styles.snapsInline}`}>
          {/* <div className={Styles.gradeint}></div> */}
          <CourseType
            name="Discipline Core"
            imagePath="Flask Icon.svg"
          ></CourseType>
          <CourseType
            name="Open Elective"
            imagePath="Gear Icon.svg"
          ></CourseType>
          <CourseType
            name="Foundation Core"
            imagePath="Window Icon.svg"
          ></CourseType>
          <CourseType
            name="Discipline Elective"
            imagePath="Hammer Icon.svg"
          ></CourseType>
          <CourseType
            name="Discipline Linked Engineering Sciences"
            imagePath="Tools Icon.svg"
          ></CourseType>
          <CourseType
            name="Non Graded Core Requirement"
            imagePath="Guitar Icon.svg"
          ></CourseType>
          <CourseType
            name="Projects and Internship"
            imagePath="Shopping Basket.svg"
          ></CourseType>
        </div>
      </div>
      <p className={Styles.title}>Course Slots</p>
      <div className={Styles.slotsContainer}>
        <Slots></Slots>
        <Slots></Slots>
        <Slots></Slots>
        <Slots></Slots>
        <Slots></Slots>
        <Slots></Slots>
      </div>
      <p className={Styles.title}>Subject Selection</p>
      <SubjectSelection></SubjectSelection>
      <p className={Styles.title}>Timetable</p>
      <Timetable></Timetable>
      <Footer></Footer>
    </div>
  );
};

export default Landing;
