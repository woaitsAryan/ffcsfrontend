import React, { useEffect, useState } from "react";
import styles from "../css/subjectSelection.module.css";
import axios from "axios";
import getHandler from "../handlers/getHandler";

interface Subject {
  code: string;
  name: string;
  credits: number;
  slots: {
    theoryslot: string;
    faculty: string;
    venue: string;
    labslot?: string;
  }[];
}

interface Slot {
  theoryslot: string;
  faculty: string;
  venue: string;
  labslot?: string;
}

interface SubjectSelectionProps {
  selectedCourseType: string;
  onCheckboxChange: (slot: Slot[]) => void;
}

const SubjectSelection: React.FC<SubjectSelectionProps> = ({selectedCourseType, onCheckboxChange}) => {

  const [subjects, setSubjects] = useState<Subject[]>([]);

  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const url = `http://127.0.0.1:3000/courses/${selectedCourseType}`;
        const response = await getHandler(url, false);
        setSubjects(response.data.coursesdata);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSubjects();
  }, [selectedCourseType]);

  const handleCheckboxClick = (slots: Slot[]) => {
    onCheckboxChange(slots); 
  };

  return (
    <div className={styles.SubjectSelectionContainer}>
      <table className={styles.SubjectSelection}>
        <thead className={styles.head}>
          <tr>
            <th className={styles.tableHeadings}>Pick</th>
            <th className={styles.tableHeadings}>S. No.</th>
            <th className={styles.tableHeadings}>Course Code</th>
            <th className={styles.tableHeadings}>Course Title</th>
            <th className={styles.tableHeadings}>Version</th>
            <th className={styles.tableHeadings}>L</th>
            <th className={styles.tableHeadings}>T</th>
            <th className={styles.tableHeadings}>P</th>
            <th className={styles.tableHeadings}>J</th>
            <th className={styles.tableHeadings}>Credits</th>
          </tr>
        </thead>
        <tbody>
          {
          subjects !== undefined && subjects.length > 0 ? 
            (subjects.map((subject,index) => (
            <tr key={subject.code}>
            <td className={styles.tableData}>
              <input type="checkbox" onClick={() => handleCheckboxClick(subject.slots)}/>
            </td>
            <td className={styles.tableData}>{index + 1}</td>
            <td className={styles.tableData}>{subject.code}</td>
            <td className={styles.tableData}>{subject.name}</td>
            <td className={styles.tableData}>1.0</td>
            <td className={styles.tableData}>3.0</td>
            <td className={styles.tableData}>0.0</td>
            <td className={styles.tableData}>0.0</td>
            <td className={styles.tableData}>0.0</td>
            <td className={styles.tableData}>{subject.credits}</td>
          </tr>
          ))):(
            <tr>
               <td colSpan={10} className={styles.tableData}>No subjects found</td>
            </tr>
            )}  
        </tbody>
      </table>
    </div>
  );
};

export default SubjectSelection;
