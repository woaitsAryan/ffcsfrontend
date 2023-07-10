import React, { useState, useEffect } from "react";
import styles from "../css/coursetype.module.css";
import { useNavigate } from "react-router-dom";

const MAX_CHAR = 20;

interface CourseTypeProps {
  name: string;
  imagePath: string;
  onClick: () => void;
}

const CourseType: React.FC<CourseTypeProps> = ({
  name,
  imagePath,
  onClick,
}) => {
  const navigate = useNavigate();

  const limitCharacters = (text: string, maxLength: number) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substring(0, maxLength) + "...";
  };

  const limitedName = limitCharacters(name, MAX_CHAR);

  const handleClick = () => {
    onClick();
    navigate("/");
  };

  return (
    <button className={styles.container} onClick={handleClick}>
      <img className={styles.image} src={imagePath} alt="Course" />
      <p className={styles.title}>{limitedName}</p>
    </button>
  );
};

export default CourseType;
