import React from 'react';
import { useNavigate } from 'react-router-dom';

const App = () => {
    const navigate = useNavigate();
  return (
    <div>
      <h1>This is the auth page!</h1>
      <button onClick={() => navigate('/login')}>Go to Login</button>
    <button onClick={() => navigate('/register')}>Go to Register</button>
    </div>
  );
};

export default App;
