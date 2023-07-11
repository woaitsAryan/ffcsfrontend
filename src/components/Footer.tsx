import React, { useState, useEffect } from "react";
import styles from "../css/footer.module.css";
const Footer = () => {
  return (
    <div className={styles.finalMainContainer}>
      <div className={styles.mainContainer}>
        <div className={styles.footerBlock}>
          <h2>About FFCS</h2>
          <p>
          FFCS is a system which allows students to plan their courses for the upcoming semester exactly how they wish. It caters to the wants and needs of the entire student body. With this approach, a student can create their own schedule, including the courses they want to take, the timings of their classes, and their preferred professors.
          </p>
        </div>
        <div className={styles.footerBlock}>
          <h2>About CSI</h2>
          <p>
          Computer Society of India is one of the largest association of computer professionals in India. We are a group of experienced designers, developers and technology enthusiasts who participate in numerous projects and hackathons. To advance technology, we host a wide range of technical and non-technical workshops, conferences, events and competitions.
          </p>
        </div>
      </div>
      <p className={styles.emoji}>Made with 💜 by CSI</p>
    </div>
  );
};

export default Footer;
