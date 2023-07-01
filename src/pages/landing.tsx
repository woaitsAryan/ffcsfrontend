import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import { ButtonProvider } from '../buttonContext';

const Landing = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/auth');
  };

  const handleRegister = () => {
    navigate('/register');
  };

  return (
    <ButtonProvider>
      <Navbar onLogin={handleLogin} onRegister={handleRegister} />
      <Hero />
    </ButtonProvider>
  );
};

export default Landing;
