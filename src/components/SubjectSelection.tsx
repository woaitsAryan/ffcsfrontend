import React, { useEffect, useState } from "react";
import styles from "../css/subjectSelection.module.css";
import getHandler from "../handlers/getHandler";
import { BarLoader } from "react-spinners";

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
  onSubjectChange: (name: string) => void;
  timetablenum: number;
}

const ITEMS_PER_PAGE = 12; // Number of items to display per page

const SubjectSelection: React.FC<SubjectSelectionProps> = ({
  selectedCourseType,
  onCheckboxChange,
  onSubjectChange,
  timetablenum,
}) => {
  const [loader, showBarLoader] = useState(false);
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [selectedSubject, setSelectedSubject] = useState<string>("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const url = `https://ffcs-backend.csivit.com/courses/${selectedCourseType}`;
          const response = await getHandler(url, false);
        showBarLoader(true);
        setSubjects(response.data.coursesdata);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSubjects();
  }, [selectedCourseType]);

  useEffect(() => {
    setSelectedSubject("");
    onSubjectChange("");
  }, [timetablenum]);

  const handleSubjectNameChange = (name: string) => {
    onSubjectChange(name);
  };

  const handleCheckboxClick = (subject: Subject) => {
    onCheckboxChange(subject.slots);
    handleSubjectNameChange(subject.code);
    setSelectedSubject(subject.code);
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const getPaginatedItems = (items: any[], currentPage: number, itemsPerPage: number) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return items.slice(startIndex, endIndex);
  };

  const paginatedSubjects = getPaginatedItems(subjects, currentPage, ITEMS_PER_PAGE);

  return (
    <div className={styles.SubjectSelectionContainer}>
      <table className={styles.SubjectSelection}>
        {/* Table Head */}
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
        {/* Table Body */}
        <tbody>
          {!loader ? (
            paginatedSubjects.map((subject, index) => (
              <tr key={subject.code}>
                <td className={styles.tableData}>
                  <input
                    type="radio"
                    onClick={() => handleCheckboxClick(subject)}
                    checked={subject.code === selectedSubject}
                  />
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
            ))
          ) : (
            <tr>
              <td colSpan={10} className={styles.tableData}>
                <BarLoader color="#36d7b7" width="100%" />
              </td>
            </tr>
          )}
        </tbody><tbody>
  {loader ? (
    subjects.length > 0 ? (
      paginatedSubjects.map((subject, index) => (
        <tr key={subject.code}>
          <td className={styles.tableData}>
            <input
              type="radio"
              onClick={() => handleCheckboxClick(subject)}
              checked={subject.code === selectedSubject}
            />
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
      ))
    ) : (
      <tr>
        <td colSpan={10} className={styles.tableData}>
          No subjects found
        </td>
      </tr>
    )
  ) : (
    <tr>
      <td colSpan={10} className={styles.tableData}>
        <BarLoader color="#36d7b7" width="100%" />
      </td>
    </tr>
  )}
</tbody>

      </table>
      {/* Pagination */}
      {loader && subjects.length > ITEMS_PER_PAGE && (
        <div className={styles.pagination}>
          <button
            className={`${styles.paginationButton} ${currentPage === 1 ? styles.disabled : ""}`}
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span className={styles.pageNumber}> Currently viewing page:{currentPage}</span>
          <button
            className={`${styles.paginationButton} ${
              currentPage === Math.ceil(subjects.length / ITEMS_PER_PAGE) ? styles.disabled : ""
            }`}
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === Math.ceil(subjects.length / ITEMS_PER_PAGE)}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default SubjectSelection;
