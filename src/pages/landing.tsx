import React, {useState} from "react";
// import Navbar from '../components/Navbar';
import Hero from "../components/Hero";
import { ButtonProvider } from "../buttonContext";
import Styles from "../css/landing.module.css";
import CourseType from "../components/CourseType";
import Slots from "../components/Slots";
import Timetable from "../components/Timetable";
import Footer from "../components/Footer";
import SubjectSelection from "../components/SubjectSelection";
import postHandler from "../handlers/postHandler";

interface Slot {
  theoryslot: string;
  faculty: string;
  venue: string;
  labslot?: string;
}

const Landing = () => { 
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [arrowRotation, setArrowRotation] = useState(0);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
    setArrowRotation(arrowRotation => (arrowRotation === 0 ? 180 : 0));
  }

  const [selectedCourseType, setSelectedCourseType] = useState("foundationcore");
  const [selectedSlots, setSelectedSlots] = useState<Slot[]>([]);
  const [Timetablenumber, setTimetablenumber] = useState<number>(0);

  const handleCourseTypeClick = (name:string) => {
    setSelectedCourseType(name);
  };

  const handleCheckboxChange = (slots: Slot[]) => {
    setSelectedSlots(slots);
  };

  const handleShareClick = async () => {
    const response = await postHandler('http://127.0.0.1:3000/share/get', {}, true)
    const shareID = `http://localhost:3000//timetable/${response.data.userID}/${Timetablenumber}`
    await navigator.clipboard.writeText(shareID)
    //message to indicate url is copied in clipboard
    //if not logged in(will return with an error), message to indicate that you need to login to share
  }

  const handleResetClick = async() => {
    const payload = {"num": Timetablenumber}
    const response = await postHandler("http://127.0.0.1:3000/timetable/reset",payload, true)
    console.log(response)
    //success message
    // if not logged in(will return with an error), message to indicate that you need to login to reset
  }
    
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
            onClick = {() => handleCourseTypeClick("disciplinecore")}
          ></CourseType>
          <CourseType
            name="Open Elective"
            imagePath="Gear Icon.svg"
            onClick = {() => handleCourseTypeClick("openelective")}
          ></CourseType>
          <CourseType
            name="Foundation Core"
            imagePath="Window Icon.svg"
            onClick = {() => handleCourseTypeClick("foundationcore")}
          ></CourseType>
          <CourseType
            name="Discipline Elective"
            imagePath="Hammer Icon.svg"
            onClick = {()=>handleCourseTypeClick("disciplineelective")}
          ></CourseType>
          <CourseType
            name="Discipline Linked Engineering Sciences"
            imagePath="Tools Icon.svg"
            onClick = {() => handleCourseTypeClick("disciplinelinkedengineeringsciences")}
          ></CourseType>
          <CourseType
            name="Non Graded Core Requirement"
            imagePath="Guitar Icon.svg"
            onClick = {() => handleCourseTypeClick("nongradedcorerequirement")}
          ></CourseType>
          <CourseType
            name="Projects and Internship"
            imagePath="Shopping Basket.svg"
            onClick = {() => handleCourseTypeClick("projectsandinternship")}
          ></CourseType>
        </div>
      </div>
      <div className={Styles.inputCourseNameContainer}>
      <p className={Styles.title}>Subject Selection</p>
      <div className={Styles.inputContainer}>
      <input type='search' placeholder="Enter course name" className={Styles.inputCourseName}></input>
      <img src='./search.svg' className={Styles.searchIcon}></img>
      </div>
      </div>
      <SubjectSelection selectedCourseType = {selectedCourseType} onCheckboxChange={handleCheckboxChange}></SubjectSelection>
      <p className={Styles.title}>Course Slots</p>
      <div className={Styles.slotsContainer}>
        {selectedSlots.map((slot, index) => (
          <Slots slot={slot} />
        ))}
      </div>
      <div className={Styles.ttBtnContainer}>
      <p className={Styles.title}>Timetable</p>
      <div className={Styles.btnContainer}>

      <button className={Styles.exportBtn}>Export</button>
      <button className={Styles.Btn} onClick = {handleShareClick}>Share</button>
      <button className={Styles.Btn}>Add</button>
      <button className={Styles.Btn}>Load</button>
      <button className={Styles.Btn} onClick = {handleResetClick}>Reset</button>
      </div>
      </div>
      <div className={Styles.ttContainerBorder}>
      <div className={Styles.timetableNumberContainer}>
        <img
          src="arrow.svg"
          alt="arrow"
          className={Styles.arrow}
          onClick={toggleDropdown}
          style={{ transform: `rotate(${arrowRotation}deg)` }}
        />
        <h2 className={Styles.timetableNumber}>Timetable name</h2>
        {dropdownVisible && (
          <div className={`${Styles.dropdownContent} ${Styles.open}`}>
            <p>Option 1</p>
            <p>Option 2</p>
            <p>Option 3</p>
          </div>
        )}
      </div>
      <Timetable></Timetable>
      </div>
      <Footer></Footer> 
    </div>
  );
};

export default Landing;
