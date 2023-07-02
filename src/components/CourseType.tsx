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
      
        <div className={styles['container']}>
        <img className={styles['image']} src={imagePath} alt="Course" />
        <p className={styles['title']}>{name}</p>
        </div>
      
    );
  };

export default CourseType;
