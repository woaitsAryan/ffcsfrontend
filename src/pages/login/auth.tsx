import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../auth.css';


const App = () => {
    const navigate = useNavigate();
  return (
    <div className='container'>
      <div>
    <p className='step'>Step 1/<p className='step-number'>3</p></p>
    <h2 className='header'>Hey,
    <img src="Waving Hand.png" className='waving-emoji'></img>
   </h2>
   <h2 className='newline'>Let's get started</h2>
    <p className='middle-txt'>Let's set up your account up and get to know you</p>
    <div className='TnC-container'>
    <input type="checkbox" id="myCheckbox" className="custom-checkbox" />
    I agree to the Terms & Conditions and Privacy Policy
    </div>
    <div className='btn-container'>
      <button className='btn-login' onClick={() => navigate('/login')}>Go to Login</button>
    <button className='btn-signUp' onClick={() => navigate('/register')}>Go to Register</button>
    </div>
    </div>
    </div>
  );
};

export default App;
