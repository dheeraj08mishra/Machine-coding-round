import React, { useEffect } from "react";

const Modal = ({ isModalOpen, onClose, title = "Modal Title", children }) => {
  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && isModalOpen) {
        onClose();
      }
    });
    return () => {
      document.removeEventListener("keydown", (e) => {
        if (e.key === "Escape" && isModalOpen) {
          onClose();
        }
      });
    };
  }, [isModalOpen]);

  return (
    <div>
      <h2>{title}</h2>
      <p>{children}</p>

      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default Modal;
