import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useNavigate } from "react-router-dom";
import styles from "../../css/login.module.css";
import postHandler from "../../handlers/postHandler";
import Cookies from "js-cookie";
import { ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import validator from 'validator';

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [step, setStep] = useState(1);
  let animationEl = useRef<HTMLDivElement>(null);
  const stepRef = useRef<HTMLDivElement>(null);
  const animationheight = {
    from: window.innerHeight,
    to: window.innerHeight / 4,
  };
  const navigate = useNavigate();

  useEffect(() => {
    if (step === 1 && animationEl.current) {
      console.log(window.innerHeight, animationEl.current.offsetTop);
      gsap.fromTo(
        stepRef.current,
        { y: animationheight.from },
        {
          y: animationheight.to,
          duration: 1.5,
          ease: "expo.out",
        }
      );
    }
  }, []);

  const storeTimetable =async () =>{
    const payload = { "timetable": JSON.parse(localStorage.getItem('timetable') || 'null'), "num": 0 };
    const response = await postHandler("http://127.0.0.1:3000/timetable/set", payload, true);
    console.log(response);

  }

  const handleContinue = () => {
    if (!validator.isAlphanumeric(username)) {
      toast.error('Username must be alphanumeric')
      return;
    }
    if (step === 1) {
      gsap.fromTo(
        stepRef.current,
        { y: animationheight.from },
        {
          y: animationheight.to,
          duration: 1.5,
          ease: "expo.out",
          onStart: () => setStep(2),
        }
      );
      // console.log(stepRef.current)
    } else if (step === 2) {
      if (!validator.isStrongPassword(password, { minLength: 8, minLowercase: 0, minUppercase: 0, minNumbers: 1, minSymbols: 0, returnScore: false })){
        toast.error('Password must be atleast 8 characters long and have a number')
        return;
      }
      //validate if the password is atleast 8 characters long and has a number
      const payload = { username: username, password: password };
      console.log(payload);
      postHandler("http://127.0.0.1:3000/register", payload, false).then(
        (response) => {
          const { token } = response.data;
          Cookies.set("token", token, { expires: 30 });
          toast.success("Successfully registered!")
          storeTimetable();
          setTimeout(()=>{
            navigate("/");
          },500)
        }
      ).catch((reject)=>{
        toast.error('Registration failed')
      });;
    }
  };
  return (
    <div className={styles.mainContainer}>
      <ToastContainer/>
      <div ref={stepRef}>
        {step === 1 && (
          <div className={styles.container} ref={animationEl}>
            <p className={styles.step}>
              Step {step + 1}/<p className={styles["step-number"]}>3</p>
            </p>
            <h2 className={styles["username-txt"]}>Enter Username</h2>
            <input
              type="text"
              placeholder="Enter Username"
              className={styles["username-field"]}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <button className={styles["continue-btn"]} onClick={handleContinue}>
              Continue
            </button>
          </div>
        )}

        {step === 2 && (
          <div className={styles.container}>
            <p className={styles.step}>
              Step {step + 1}/<p className={styles["step-number"]}>3</p>
            </p>
            <h2 className={styles["username-txt"]}>Enter Password</h2>
            <input
              type="password"
              className={styles["username-field"]}
              value={password}
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleContinue} className={styles["continue-btn"]}>
              Continue
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginForm;
