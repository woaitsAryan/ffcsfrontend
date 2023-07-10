import React, { useState, useEffect } from "react";
import styles from "../css/coursetype.module.css";
import { useNavigate } from "react-router-dom";

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

  const handleClick = () => {
    onClick();
    navigate("/");
  };

  return (
    <button className={styles.container} onClick={handleClick}>
      <img className={styles.image} src={imagePath} alt="Course" />
      <p className={styles.title}>{name}</p>
    </button>
  );
};

export default CourseType;
