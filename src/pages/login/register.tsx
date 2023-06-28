import React, { useState, useRef } from 'react';
import { gsap } from 'gsap';
import { useNavigate } from 'react-router-dom';
const LoginForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [step, setStep] = useState(1);

  const stepRef = useRef(null);

  const handleContinue = () => {
    if (step === 1) {
      gsap.fromTo(stepRef.current, { x: window.innerWidth }, { x: 0, duration: 0.5, onStart: () => setStep(2) });
    } else if (step === 2) {
      console.log(username, password);
      //save credentials and redirect to login page
      navigate('/login');
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
