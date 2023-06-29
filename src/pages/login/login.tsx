import React, { useState, useRef,useEffect } from 'react';
import { gsap } from 'gsap';
import styles from '../../login.module.css'
const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [step, setStep] = useState(1);
  let animationEl= useRef<HTMLDivElement>(null);
  const stepRef =  useRef<HTMLDivElement>(null);
  const animationheight = { from: window.innerHeight, to: window.innerHeight/4 };

  useEffect(() => {
    if (step === 1 && animationEl.current) {
      console.log(window.innerHeight, animationEl.current.offsetTop)
      gsap.fromTo(
        stepRef.current,
        { y: animationheight.from },
        {
          y: animationheight.to,
          duration: 1.5,
          ease: 'expo.out',
        }
      );
    }
  }, []);
  const handleContinue = () => {
    if (step === 1) {
      gsap.fromTo(stepRef.current, { y: animationheight.from}, { y: animationheight.to,duration: 1.5,ease: "expo.out",onStart: () => setStep(2) });
      // console.log(stepRef.current)
    } else if (step === 2) {
      // console.log(username, password);     
    }
  };
  return (
    <div>
      <div ref={stepRef} className={styles.parent}>
        {step === 1 && (
          <div className={styles.container} ref={animationEl}  >
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
          <div className={styles.container} >
            <p className={styles.step}>Step 3/<p className={styles['step-number']}>3</p></p>
            <h2 className={styles['username-txt']}>Enter Password</h2>
            <input
              type="password" className={styles['username-field']}
              value={password} placeholder='Enter password'
              onChange={(e) => setPassword(e.target.value)}
            />
             <button onClick={handleContinue} className={styles['continue-btn']}>Continue</button>
          </div>
        )}
      </div>

     
    </div>
  );
};

export default LoginForm;
