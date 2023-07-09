import React, { useState, ChangeEvent } from "react";
import Styles from "../css/shareModal.module.css";

interface ShareModalProps {
  closeModal: () => void;
  onConfirm: (username: string) => void;
  data: { placeholder: string, buttonText: string };
}

const ShareModal: React.FC<ShareModalProps> = ({ closeModal, onConfirm, data }) => {
  const [username, setUsername] = useState("");

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleConfirmClick = () => {
    onConfirm(username);
    closeModal();
  };

  return (
    <div className={Styles.modalOverlay}>
      <div className={Styles.modalContent}>
        
        <input
          className={Styles.inputField}
          type="text"
          placeholder={data.placeholder}
          value={username}
          onChange={handleUsernameChange}
        />
        <button className={Styles.confirmButton} onClick={handleConfirmClick}>
          {data.buttonText}
        </button>
        <button className={Styles.closeButton} onClick={closeModal}>
          &times;
        </button>
      </div>
    </div>
  );
};

export default ShareModal;
