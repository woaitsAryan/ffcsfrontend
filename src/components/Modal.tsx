import React, { ReactNode, useState } from "react";
import Styles from "../css/modals.module.css";

interface ModalProps {
  closeModal: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ closeModal, children }) => {
  const [urlToCopy, setUrlToCopy] = useState("");

  const handleCopyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(urlToCopy);
      console.log("URL copied to clipboard:", urlToCopy);
    } catch (error) {
      console.error("Failed to copy URL to clipboard:", error);
    }
  };

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrlToCopy(e.target.value);
  };

  return (
    <div className={Styles.modalOverlay}>
      <div className={Styles.modalContent}>
        
        <div className={Styles.modalBody}>
          {/* {children} */}
          <input
            type="text"
            placeholder="Enter friend's timetable link"
            value={urlToCopy}
            onChange={handleUrlChange}
          />
          <button onClick={handleCopyToClipboard}>
            Copy to Clipboard
          </button>
          <button className={Styles.closeButton} onClick={closeModal}>
          &times;
        </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
