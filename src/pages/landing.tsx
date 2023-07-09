import React, {useState,ChangeEvent} from "react";
// import Navbar from '../components/Navbar';
import Modal from "../components/Modal";
import Hero from "../components/Hero";
import ShareModal from "../components/ShareModal";
import { ButtonProvider } from "../buttonContext";
import Styles from "../css/landing.module.css";
import CourseType from "../components/CourseType";
import Slots from "../components/Slots";
import Timetable from "../components/Timetable";
import Footer from "../components/Footer";
import SubjectSelection from "../components/SubjectSelection";
import postHandler from "../handlers/postHandler";
import removeData from "../handlers/removeData";
import addData from "../handlers/addData";
import { ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
let scheduleData = [
  {   "day": "Monday",
      "data": [
          ["A1/L1",""],
          ["F1/L2", ""],
          ["D1/L3", ""],
          ["TB1/L4", ""],
          ["TG1/L5", ""],
          ["L6", ""],
          ["",""],
          ["A2/L31",""],
          ["F2/L32", ""],
          ["D2/L33", ""],
          ["TB2/L34", ""],
          ["TG2/L35", ""],
          ["L36", ""]
      ]
  },
  {
      "day": "Tuesday",
      "data":[
          ["B1/L7", ""],
          ["G1/L8",""],
          ["E1/L9",""],
          ["TC1/L10",""],
          ["TAA1/L11",""],
          ["L12",""],
          ["",""],
          ["B2/L37",""],
          ["G2/L38",""],
          ["E2/L39",""],
          ["TC2/L40",""],
          ["TAA2/L41",""],
          ["L42",""]
      ]
  },
  {
      "day":"Wednesday",
      "data":[
          ["C1/L13",""],
          ["A1/L14",""],
          ["F1/L15",""],
          ["V1/L16",""],
          ["V2/L17",""],
          ["L18",""],
          ["",""],
          ["C2/L43",""],
          ["A2/L44",""],
          ["F2/L45",""],
          ["TD2/L46",""],
          ["TBB2/L47",""],
          ["L48",""]
      ]
  },
  {
      "day": "Thursday",
      "data":[
          ["D1/L19",""],
          ["B1/L20",""],
          ["G1/L21",""],
          ["TE1/L22",""],
          ["TCC1/L23",""],
          ["L24",""],
          ["",""],
          ["D2/L49",""],
          ["B2/L50",""],
          ["G2/L51",""],
          ["TE2/L52",""],
          ["TCC2/L53",""],
          ["L54",""]
      ]
  },
  {
      "day":"Friday",
      "data":[
          ["E1/L25",""],
          ["C1/L26",""],
          ["TA1/L27",""],
          ["TF1/L28",""],
          ["TD1/L29",""],
          ["L30",""],
          ["",""],
          ["E2/L55",""],
          ["C2/L56",""],
          ["TA2/L57",""],
          ["TF2/L58",""],
          ["TDD2/L59",""],
          ["L60",""]
      ]
  }   
]

interface Slot {
  theoryslot: string;
  faculty: string;
  venue: string;
  labslot?: string;
}

const Landing = () => { 
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [arrowRotation, setArrowRotation] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [urlToCopy, setUrlToCopy] = useState("");
  const [viewFriendTimetable, setViewFriendTimetable] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [shareUsername, setShareUsername] = useState("");
  
  const handleCopyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(urlToCopy);
      console.log("URL copied to clipboard:", urlToCopy);
    } catch (error) {
      console.error("Failed to copy URL to clipboard:", error);
    }
  };

  const handleUrlChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUrlToCopy(e.target.value);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  const handleModalClose = () => {
    setShowModal(false);
  };  
  const handleLoadFriendTimetable = () => {
    setShowModal(true);
  };
  const toggleDropdown = () => {
    setDropdownVisible((prevVisible) => !prevVisible);
    setArrowRotation(arrowRotation => (arrowRotation === 0 ? 180 : 0));
  }

  const [selectedCourseType, setSelectedCourseType] = useState("foundationcore");
  const [selectedSlots, setSelectedSlots] = useState<Slot[]>([]);
  const [Timetablenumber, setTimetablenumber] = useState<number>(0);
  const [selectedTimetableSlot, setSelectedTimetableSlot] = useState<Slot>({theoryslot: "", faculty: "", venue: ""});
  const [subjectName, setSubjectName] = useState<string>("");

  const handleSubjectNameChange = (name:string) => {
    setSubjectName(name);
  }
  const handleCourseTypeClick = (name:string) => {
    setSelectedCourseType(name);
  };

  const handleCheckboxChange = (slots: Slot[]) => {
    setSelectedSlots(slots);
  };

  const handleSlotSelect = async (slot: Slot)  => {
    scheduleData = removeData(scheduleData,subjectName,selectedTimetableSlot.theoryslot);
    scheduleData = removeData(scheduleData,subjectName,selectedTimetableSlot.labslot?selectedTimetableSlot.labslot:"nuffin");
    scheduleData = addData(scheduleData,subjectName,slot.theoryslot);
    scheduleData = addData(scheduleData,subjectName,slot.labslot?slot.labslot:"nuffin");
    localStorage.setItem("timetable", JSON.stringify(scheduleData));
    setSelectedTimetableSlot(slot);
  };

  const handleShareClick = () => {
    setShowShareModal(true);
  };
  const handleShareModalConfirm = (username: string) => {
    setShareUsername(username);
    setShowShareModal(false);
    // Perform further logic with the username
    console.log("Share with username:", username);
  };


  // const handleShareClick = async () => {
  //   const response = await postHandler('http://127.0.0.1:3000/share/get', {}, true)
  //   const shareID = `http://localhost:3000/timetable/${response.data.userID}/${Timetablenumber}`
  //   await navigator.clipboard.writeText(shareID)
   
  // }

  const handleOptionClick = async (num:number) => {
    setTimetablenumber(num);
  }

  const handleResetClick = async() => {
    const payload = {"num": Timetablenumber}
    const response = await postHandler("http://127.0.0.1:3000/timetable/reset",payload, true)
    if(response.status === 0){
      toast.error("Please login to reset");
      return;
    }
    toast.success("Successfully reset timetable")
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
{/*       <div className={Styles.inputCourseNameContainer}>
 */}      <p className={Styles.title}>Subject Selection</p>
      {/* <div className={Styles.inputContainer}> */}
      {/* <input type='search' placeholder="Enter course name" className={Styles.inputCourseName}></input>
      <img src='./search.svg' className={Styles.searchIcon}></img>
      </div>
      </div> */}
      <SubjectSelection selectedCourseType = {selectedCourseType} onCheckboxChange={handleCheckboxChange} 
      onSubjectChange={handleSubjectNameChange} timetablenum={Timetablenumber}></SubjectSelection>
      <p className={Styles.title}>Course Slots</p>
      <div className={Styles.slotsContainer}>
        {subjectName && selectedSlots.map((slot, index) => (
          <Slots key = {index} onSelect = {handleSlotSelect} slot={slot} selectedSlot = {selectedTimetableSlot}/>
        ))}
      </div>
      <div className={Styles.ttBtnContainer}>
      <p className={Styles.timetableTitle}>Timetable</p>
      <div className={Styles.btnContainer}>

      <button className={Styles.exportBtn}>Export</button>
      <button className={Styles.Btn} onClick = {handleShareClick}>Share</button>
      {showShareModal && (
    <ShareModal closeModal={() => setShowShareModal(false)} onConfirm={handleShareModalConfirm} />
  )}
      <button className={Styles.Btn}>Add</button>
      <button className={Styles.Btn} onClick={handleLoadFriendTimetable}>
        Load Friend's Timetable
      </button>     
      {showModal && (
        <Modal closeModal={closeModal}>
          {/* Modal content */}
          <input
            type="text"
            placeholder="Enter friend's timetable link"
            value={urlToCopy}
            onChange={handleUrlChange}
          />
          <button onClick={handleCopyToClipboard}>Copy to Clipboard</button>
        </Modal>
      )}
      <button className={Styles.Btn} onClick = {handleResetClick}>Reset</button>
      </div>
      </div>
      <div className={Styles.ttContainerBorder}>
      <div className={Styles.timetableNumberContainer}>
  <img
    src="arrow.svg"
    alt="arrow"
    className={`${Styles.arrow} ${dropdownVisible ? Styles.open : ""}`}
    onClick={toggleDropdown}
    style={{ transform: `rotate(${arrowRotation}deg)` }}
  />
  <h2 className={Styles.timetableNumber}>Timetable name</h2>
  {dropdownVisible && (
    <div className={Styles.dropdownContent}>
      <label>
        <input
          type="radio"
          name="options"
          value="option1"
          checked={Timetablenumber === 0}
          onChange={() => handleOptionClick(0)}
        />
        Option 1
      </label>
      <label>
        <input
          type="radio"
          name="options"
          value="option2"
          checked={Timetablenumber === 1}
          onChange={() => handleOptionClick(1)}
        />
        Option 2
      </label>
      <label>
        <input
          type="radio"
          name="options"
          value="option3"
          checked={Timetablenumber === 2}
          onChange={() => handleOptionClick(2)}
        />
        Option 3
      </label>
      <label className={Styles.friendsTTheader}>Friend's Timetable</label>
      <label>
        <input
          type="radio"
          name="options"
          value="option3"
          checked={Timetablenumber === 2}
          onChange={() => handleOptionClick(2)}
        />
        Friend 1
      </label>
    </div>
  )}
</div>


      <Timetable propToWatch={selectedTimetableSlot} timetableNum = {Timetablenumber}></Timetable>
      </div>
      <Footer></Footer> 
    </div>
  );
};

export default Landing;
