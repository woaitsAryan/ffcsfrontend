import React, { useState, useRef } from 'react';
import { gsap } from 'gsap';
import styles from '../../login.module.css'
const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [step, setStep] = useState(1);

  const stepRef = useRef(null);

  const handleContinue = () => {
    if (step === 1) {
      gsap.fromTo(stepRef.current, { x: window.innerWidth }, { x: 0, duration: 0.5, onStart: () => setStep(2) });
    } else if (step === 2) {
      console.log(username, password);
      // if login successful, save state and redirect to landing page
      // else, display error message
    }
  };

  return (
    <div>
      <div ref={stepRef}>
        {step === 1 && (
          <div className={styles.container}>
            <p className={styles.step}>Step 2/<p className={styles['step-number']}>3</p></p>
            <h2 className={styles['username-txt']}>Enter Username</h2>
            <input
              type="text" placeholder='Enter Username' className={styles['username-field']}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
             <button className={styles['continue-btn']} onClick={handleContinue}>Continue</button>
          </div>
        )}

        {step === 2 && (
          <div>
            <h2>Enter Password</h2>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
             <button onClick={handleContinue}>Continue</button>
          </div>
        )}
      </div>

     
    </div>
  );
};

export default LoginForm;
