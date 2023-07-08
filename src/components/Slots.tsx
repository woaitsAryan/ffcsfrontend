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
  selectedSlot: Slot;
  onSelect: (selectedSlot: Slot) => void;
}
//Remove course name and add lab slot css and venue css
const Slots: React.FC<SlotsProps> = ({ slot, onSelect, selectedSlot }) => {
  const handleSelect = () => {
    onSelect(slot); // Notify the parent component about the selection
  };
  return (
    <div className={styles.mainContainer}>
      <input type="radio" onChange={handleSelect} checked = {slot == selectedSlot}/>
      <div className={styles.slotName}>{slot.theoryslot}</div>
      <div className={styles.courseName}>{slot.faculty}</div>
      <div className={styles.professorName}>{slot.faculty}</div>
    </div>
  );
};

export default Slots;