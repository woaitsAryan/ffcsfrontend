import React from 'react';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
    const navigate = useNavigate();


  return (
    <div>
      <h1>Click here to go to the Auth page!</h1>
        <button onClick={() => navigate('/auth')}>Go to Auth</button>
    </div>
  );
};

export default Landing;
