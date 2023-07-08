import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "../../css/auth.module.css";
let val = "";
interface LocationState {
  buttonClicked: string;
}

const AuthPage: React.FC = () => {
  const location = useLocation();
  const buttonClicked = (location.state as LocationState)?.buttonClicked;
  console.log(buttonClicked);
  val = buttonClicked;
  useEffect(() => {}, [buttonClicked]);

  const navigate = useNavigate();
  const [fadeOut, setFadeOut] = useState(false);

  const handleLogin_ = () => {
    setFadeOut(true);
    setTimeout(() => {
      navigate("/login");
    }, 500); // Adjust the duration of the fade-out animation here
  };

  const handleRegister_ = () => {
    setFadeOut(true);
    setTimeout(() => {
      navigate("/register");
    }, 500); // Adjust the duration of the fade-out animation here
  };

  return (
    <div className={`${styles.container} ${fadeOut ? styles["fade-out"] : ""}`}>
      <div className={styles.container2}>
        <p className={styles.step}>
          Step 1/
          <p className={styles["step-number"]}>3</p>
        </p>
        <h2 className={styles.header}>
          Hey,
          <img
            src="Waving Hand.png"
            className={styles["waving-emoji"]}
            alt="Waving Hand"
          />
        </h2>
        <h2 className={styles.newline}>Let's get started</h2>
        <p className={styles["middle-txt"]}>
          Let's set up your account up and get to know you
        </p>
        <div className={styles["TnC-container"]}>
          <input type="checkbox" />I agree to the Terms & Conditions and Privacy
          Policy
        </div>
        <div className={styles["btn-container"]}>
          <button
            className={val === "login" ? styles["btn-login"] : styles["invis"]}
            onClick={handleLogin_}
          >
            Go to Login
          </button>
          <button
            className={
              val === "register" ? styles["btn-signUp"] : styles["invis"]
            }
            onClick={handleRegister_}
          >
            Go to Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
