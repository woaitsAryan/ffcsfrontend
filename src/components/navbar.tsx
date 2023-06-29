import React, { useState, useEffect } from 'react';
import styles from '../css/navbar.module.css';

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsSticky(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`${styles.navbar} ${isSticky ? styles.sticky : ''}`}>
      <div className={styles.heading}>FFCS Planner</div>
      <ul className={styles.navLinks}>
        <li className={styles.navItem}>Login</li>
        <li className={styles.navItem}>Sign Up</li>
      </ul>
    </nav>
  );
};

export default Navbar;
