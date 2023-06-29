import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../css/auth.module.css';


const App = () => {
    const navigate = useNavigate();

    const handleLogin = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault(); 
      navigate('/login');
    };
  
    const handleRegister = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault(); 
      navigate('/register');
    };

  return (
    <div className={styles.container}>
      <div>
    <p className={styles.step}>Step 1/<p className={styles['step-number']}>3</p></p>
    <h2 className={styles.header}>Hey,
    <img src="Waving Hand.png" className={styles['waving-emoji']}></img>
   </h2>
   <h2 className={styles.newline}>Let's get started</h2>
    <p className={styles['middle-txt']}>Let's set up your account up and get to know you</p>
    <div className={styles['TnC-container']}>
      <input type='checkbox'></input>
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
