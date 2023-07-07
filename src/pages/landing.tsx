import React, {useState} from "react";
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

interface Slot {
  theoryslot: string;
  faculty: string;
  venue: string;
  labslot: string;
}

const Landing = () => { 
  const [selectedCourseType, setSelectedCourseType] = useState("disciplineCore");
  const [selectedSlots, setSelectedSlots] = useState<Slot[]>([]);

  const handleCourseTypeClick = (name:string) => {
    setSelectedCourseType(name);
  };

  const handleCheckboxChange = (slots: Slot[]) => {
    setSelectedSlots(slots);
  };
    
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
            onClick = {() => handleCourseTypeClick("disciplineCore")}
          ></CourseType>
          <CourseType
            name="Open Elective"
            imagePath="Gear Icon.svg"
            onClick = {() => handleCourseTypeClick("openElective")}
          ></CourseType>
          <CourseType
            name="Foundation Core"
            imagePath="Window Icon.svg"
            onClick = {() => handleCourseTypeClick("foundationCore")}
          ></CourseType>
          <CourseType
            name="Discipline Elective"
            imagePath="Hammer Icon.svg"
            onClick = {()=>handleCourseTypeClick("disciplineElective")}
          ></CourseType>
          <CourseType
            name="Discipline Linked Engineering Sciences"
            imagePath="Tools Icon.svg"
            onClick = {() => handleCourseTypeClick("disciplineLinkedEngineeringSciences")}
          ></CourseType>
          <CourseType
            name="Non Graded Core Requirement"
            imagePath="Guitar Icon.svg"
            onClick = {() => handleCourseTypeClick("nonGradedCoreRequirement")}
          ></CourseType>
          <CourseType
            name="Projects and Internship"
            imagePath="Shopping Basket.svg"
            onClick = {() => handleCourseTypeClick("projectsAndInternship")}
          ></CourseType>
        </div>
      </div>
      <p className={Styles.title}>Course Slots</p>
      <div className={Styles.slotsContainer}>
        {selectedSlots.map((slot, index) => (
          <Slots slot={slot} />
        ))}
      </div>
      <div className={Styles.inputCourseNameContainer}>
      <p className={Styles.title}>Subject Selection</p>
      <div className={Styles.inputContainer}>
      <input type='search' placeholder="Enter course name" className={Styles.inputCourseName}></input>
      <img src='./search.svg' className={Styles.searchIcon}></img>
      </div>
      </div>
      <SubjectSelection selectedCourseType = {selectedCourseType} onCheckboxChange={handleCheckboxChange}></SubjectSelection>
      <p className={Styles.title}>Timetable</p>
      <Timetable></Timetable>
      <Footer></Footer> 
    </div>
  );
};

export default Landing;
