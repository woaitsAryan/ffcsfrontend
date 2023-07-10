import React, { useState, useEffect } from "react";
import styles from "../css/footer.module.css";
const Footer = () => {
  return (
    <div className={styles.finalMainContainer}>
      <div className={styles.mainContainer}>
        <div className={styles.footerBlock}>
          <h2>About FFCS</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam quis nostrud exercitation ullamco laboris nisi ut
            aliquip{" "}
          </p>
        </div>
        <div className={styles.footerBlock}>
          <h2>About CSI</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam quis nostrud exercitation ullamco laboris nisi ut
            aliquip
          </p>
        </div>
      </div>
      <p className={styles.emoji}>Made with 💜 by CSI</p>
    </div>
  );
};

export default Footer;
