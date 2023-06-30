import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
const Landing = () => {
    const navigate = useNavigate();


  return (
    <div>
        <Navbar />
      <h1>Click here to go to the Auth page!</h1>
        <button onClick={() => navigate('/auth')}>Go to Auth</button>
        <Hero></Hero>
    </div>
  );
};

export default Landing;
