import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../css/coursetype.module.css';
import Navbar from './Navbar';
interface CourseTypeProps {
    name: string;
    imagePath: string;
  }

  const CourseType: React.FC<CourseTypeProps> = ({ name, imagePath }) => {
    return (
      <div>
        <h2>{name}</h2>
        <img src={imagePath} alt="Course" />
      </div>
    );
  };

export default CourseType;
