import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

export default function Modal({ open, children, onClose }) {
  if (!open) return null;
  return ReactDOM.createPortal(
    <Fragment>
      <div className="Overlay-styles"></div>
      <div className="Modal-style">
        <button onClick={onClose}>Close Modal</button>
        {children}
      </div>
    </Fragment>,
    document.getElementById("portal")
  );
}
