import React, { useEffect, useState } from "react";
import css from "./Modal.module.css";
import ReactDOM from "react-dom";

const Modal = ({ isOpen, onClose, children }) => {
  const [isBrowser, setIsBrowser] = useState(false);


  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const modalOpen = isOpen && (
    <div className={css.header}>
      <div className={css.modal}>
        {children}
        <span onClick={onClose}>&times;</span>
      </div>
    </div>
  );

  return isBrowser
    ? ReactDOM.createPortal(modalOpen, document.getElementById("portal-root"))
    : null;
};

export default Modal;
