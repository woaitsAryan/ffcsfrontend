import React, { useState, useEffect } from 'react';
import styles from '../css/navbar.module.css';
import { useNavigate } from 'react-router-dom';


const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const [isSticky, setIsSticky] = useState(false);

  const handleLogin = () => {
    setTimeout(() => {
      navigate('/auth', { state: { buttonClicked: 'login' } });
    }, 0); // duration must be 0 
  };

  const handleRegister = () => {
    setTimeout(() => {
      navigate('/auth', { state: { buttonClicked: 'register' } });
    }, 0); // duration must be 0
  };

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
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
      <div className={styles.heading}>FFCS Planner</div>
      <img src='ffcsLogo.svg'></img>
      </div>
      <ul className={styles.navLinks}>
        <li className={styles.navItem} onClick={handleLogin}>
          Login
        </li>
        <li className={styles.navItem} onClick={handleRegister}>
          Sign Up
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
