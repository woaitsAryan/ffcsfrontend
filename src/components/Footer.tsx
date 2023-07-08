import React, { useState, useEffect } from 'react';
import styles from '../css/footer.module.css';
const Footer = () => {
   


return (
    <div className={styles.finalMainContainer}>
  <div className={styles.mainContainer}>
       <div className={styles.aboutFfcsContainer}>
   <h1>About FFCS</h1>
   <p>We help you plan your next semester
in VIT with an easy and flexible FFCS planner. </p>
    </div>
   <div className={styles.aboutCsiContainer}>
   <h1>About CSI</h1>
   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
   </div>
  </div>
  <p>Made with ❤️ by CSI</p>
  </div>
);
};

export default Footer;
