import React, { useEffect, useState } from "react";
import styles from "../css/subjectSelection.module.css";

const SubjectSelection: React.FC = () => {
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
          <tr>
            <td className={styles.tableData}><input type='checkbox'></input></td>
            <td className={styles.tableData}>1</td>
            <td className={styles.tableData}>BEEE102L</td>
            <td className={styles.tableData}>
              Basic Electrical and Electronics...
            </td>
            <td className={styles.tableData}>1.0</td>
            <td className={styles.tableData}>3.0</td>
            <td className={styles.tableData}>0.0</td>
            <td className={styles.tableData}>0.0</td>
            <td className={styles.tableData}>0.0</td>
            <td className={styles.tableData}>3.0</td>
          </tr>
          <tr>
            <td className={styles.tableData}><input type='checkbox'></input></td>
            <td className={styles.tableData}>2</td>
            <td className={styles.tableData}>BCSE101E</td>
            <td className={styles.tableData}>Computer Programming: Python</td>
            <td className={styles.tableData}>1.0</td>
            <td className={styles.tableData}>1.0</td>
            <td className={styles.tableData}>0.0</td>
            <td className={styles.tableData}>4.0</td>
            <td className={styles.tableData}>0.0</td>
            <td className={styles.tableData}>3.0</td>
          </tr>
          <tr>
            <td className={styles.tableData}><input type='checkbox'></input></td>
            <td className={styles.tableData}>3</td>
            <td className={styles.tableData}>BCSE103E</td>
            <td className={styles.tableData}>Computer Programming: Java</td>
            <td className={styles.tableData}>1.0</td>
            <td className={styles.tableData}>1.0</td>
            <td className={styles.tableData}>0.0</td>
            <td className={styles.tableData}>4.0</td>
            <td className={styles.tableData}>0.0</td>
            <td className={styles.tableData}>3.0</td>
          </tr>
          <tr>
            <td className={styles.tableData}><input type='checkbox'></input></td>
            <td className={styles.tableData}>4</td>
            <td className={styles.tableData}>BHUM103L</td>
            <td className={styles.tableData}>Micro Economics</td>
            <td className={styles.tableData}>1.0</td>
            <td className={styles.tableData}>3.0</td>
            <td className={styles.tableData}>0.0</td>
            <td className={styles.tableData}>0.0</td>
            <td className={styles.tableData}>0.0</td>
            <td className={styles.tableData}>3.0</td>
          </tr>
          <tr>
            <td className={styles.tableData}><input type='checkbox'></input></td>
            <td className={styles.tableData}>5</td>
            <td className={styles.tableData}>BEEE102L</td>
            <td className={styles.tableData}>Urban Community Development</td>
            <td className={styles.tableData}>1.0</td>
            <td className={styles.tableData}>3.0</td>
            <td className={styles.tableData}>0.0</td>
            <td className={styles.tableData}>0.0</td>
            <td className={styles.tableData}>0.0</td>
            <td className={styles.tableData}>3.0</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SubjectSelection;
