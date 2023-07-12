import React, { useState, useEffect } from "react";
import styles from "../css/navbar.module.css";
import { useNavigate } from "react-router-dom";
import { AxiosResponse } from "axios";
import Cookies from "js-cookie";
import postHandler from "../handlers/postHandler";

interface VerifyResponse {
  error: string;
  verified: boolean;
}

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showHamburger, setShowHamburger] = useState(false);

  useEffect(() => {
    const checkToken = async () => {
      try {
        const isVerified = await checkLogin();
        setIsLoggedIn(isVerified);
      } catch (error) {
        console.error("Verification request failed:", error);
        setIsLoggedIn(false);
      }
    };

    checkToken();
  }, []);

  const checkLogin = (): Promise<boolean> => {
    const token = Cookies.get("token");
    if (token != undefined) {
      return postHandler("https://ffcs-backend.csivit.com/verify", {}, true).then(
        (response: AxiosResponse<{ verified: boolean }>) => {
          const { verified } = response.data;
          return verified;
        }
      );
    } else {
      return Promise.resolve(false);
    }
  };

  const removeTokenFromLocalStorage = () => {
    Cookies.remove("token");
    setIsLoggedIn(false);
    localStorage.removeItem("timetable");
    navigate("/");
    window.location.reload();
  };

  const handleLogin = () => {
    setTimeout(() => {
      navigate("/auth", { state: { buttonClicked: "login" } });
    }, 0); // duration must be 0
  };

  const handleRegister = () => {
    setTimeout(() => {
      navigate("/auth", { state: { buttonClicked: "register" } });
    }, 0); // duration must be 0
  };

  const showHamburgerHandler = () => {
    if (!showHamburger) {
      setShowHamburger(true);
    } else {
      setShowHamburger(false);
    }
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <div className={styles.heading}>FFCS Planner</div>
        <img src="mainLogo.svg" className={styles.logo} alt="logo"></img>
      </div>
      <ul
        className={
          showHamburger
            ? `${styles.navmenu}  ${styles.active}`
            : `${styles.navmenu}`
        }
      >
        {!isLoggedIn && (
          <>
            <li className={styles.navItem} onClick={handleLogin}>
              Login
            </li>
            <li className={styles.navItem1} onClick={handleRegister}>
              Sign Up
            </li>
          </>
        )}
        {isLoggedIn && (
          <li className={styles.navItem1} onClick={removeTokenFromLocalStorage}>
            Sign Out
          </li>
        )}
      </ul>

      <div
        className={
          showHamburger
            ? `${styles.hamburger}  ${styles.active}`
            : `${styles.hamburger}`
        }
        onClick={showHamburgerHandler}
      >
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </div>
    </nav>
  );
};

export default Navbar;
