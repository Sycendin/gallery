import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

export default function Modal({ open, onClose, info }) {
  if (!open) return null;
  return ReactDOM.createPortal(
    <Fragment>
      <div className="Overlay-styles"></div>

      <div className="Modal-style">
        <div className="Modal-close"></div>
        <img
          className="image"
          style={{ height: 500, width: 300 }}
          src={info}
          alt="face"
        ></img>
        <p className="p">This is a drawn image of Mike Trout's face</p>
        <button className="Modal-button" onClick={onClose}>
          Close Modal
        </button>
      </div>
    </Fragment>,
    document.getElementById("portal")
  );
}
