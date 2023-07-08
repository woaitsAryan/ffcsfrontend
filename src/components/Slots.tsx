import React from 'react';
import styles from '../css/slots.module.css';

interface Slot {
  theoryslot: string;
  faculty: string;
  venue: string;
  labslot?: string;
}

interface SlotsProps {
  slot: Slot;
}
//Remove course name and add lab slot css and venue css
const Slots: React.FC<SlotsProps> = ({ slot }) => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.slotName}>{slot.theoryslot}</div>
      <div className={styles.courseName}>{slot.faculty}</div>
      <div className={styles.professorName}>{slot.faculty}</div>
    </div>
  );
};

export default Slots;