import React, { useState, useRef } from 'react';
import { gsap } from 'gsap';

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
          <div>
            <h2>Enter Username</h2>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
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
          </div>
        )}
      </div>

      <button onClick={handleContinue}>Continue</button>
    </div>
  );
};

export default LoginForm;
