import React, {useState, useEffect} from 'react';
import styles from '../css/navbar.module.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

interface VerifyResponse {
  error: string;
  verified: boolean;
}

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkToken = async () => {
      try {
        const isVerified = await checkLogin();
        setIsLoggedIn(isVerified);
      } catch (error) {
        console.error('Verification request failed:', error);
        setIsLoggedIn(false);
      }
    };

    checkToken();
  }, []);
  
  const checkLogin = async (): Promise<boolean> => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const response = await axios.post('http://127.0.0.1:3000/verify', null, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        const verifyResponse: VerifyResponse = response.data;
        return verifyResponse.verified === true;
      } catch (error) {
        console.error('Verification request failed:', error);
        return false;
      }
    } else {
      return false;
    }
  };

  const removeTokenFromLocalStorage = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/');
  };

  const handleLogin = () => {
    setTimeout(() => {
      navigate('/auth', { state: { buttonClicked: 'login' } });
    }, 0); // duration must be 0 
  };

  const handleRegister = () => {
    setTimeout(() => {
      navigate('/auth', { state: { buttonClicked: 'register' } });
    }, 0); // duration must be 0
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
      <div className={styles.heading}>FFCS Planner</div>
      <img src='ffcsLogo.svg'></img>
      </div>
      <ul className={styles.navLinks}>
        {!isLoggedIn && (
            <>
              <li className={styles.navItem} onClick={handleLogin}>
                Login
              </li>
              <li className={styles.navItem} onClick={handleRegister}>
                Sign Up
              </li>
            </>
          )}
          {isLoggedIn && (
            <li className={styles.navItem} onClick={removeTokenFromLocalStorage}>
              Sign Out
            </li>
          )}
      </ul>
    </nav>
  );
};

export default Navbar;
