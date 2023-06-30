import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../css/auth.module.css';

const App: React.FC = () => {
  const navigate = useNavigate();
  const [fadeOut, setFadeOut] = useState(false);

  const handleLogin = () => {
    setFadeOut(true);
    setTimeout(() => {
      navigate('/login');
    }, 500); // Adjust the duration of the fade-out animation here
  };

  const handleRegister = () => {
    setFadeOut(true);
    setTimeout(() => {
      navigate('/register');
    }, 500); // Adjust the duration of the fade-out animation here
  };

  return (
    <div className={`${styles.container} ${fadeOut ? styles['fade-out'] : ''}`}>
      <div>
        <p className={styles.step}>Step 1/<p className={styles['step-number']}>3</p></p>
        <h2 className={styles.header}>
          Hey,
          <img src="Waving Hand.png" className={styles['waving-emoji']} alt="Waving Hand"></img>
        </h2>
        <h2 className={styles.newline}>Let's get started</h2>
        <p className={styles['middle-txt']}>Let's set up your account up and get to know you</p>
        <div className={styles['TnC-container']}>
          <input type='checkbox' />
          I agree to the Terms & Conditions and Privacy Policy
        </div>
        <div className={styles['btn-container']}>
          <button className={styles['btn-login']} onClick={handleLogin}>Go to Login</button>
          <button className={styles['btn-signUp']} onClick={handleRegister}>Go to Register</button>
        </div>
      </div>
    </div>
  );
};

export default App;
