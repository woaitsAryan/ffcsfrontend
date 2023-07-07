import React, { useState, useEffect } from 'react';
import styles from '../css/footer.module.css';
const Footer = () => {
   


return (
    <div className={styles.finalMainContainer}>
  <div className={styles.mainContainer}>
       <div className={styles.aboutFfcsContainer}>
   <h1>About FFCS</h1>
   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip </p>
    </div>
   <div className={styles.aboutCsiContainer}>
   <h1>About CSI</h1>
   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip </p>
   </div>
  </div>
  <p>Made with Love by CSI</p>
  </div>
);
};

export default Footer;
