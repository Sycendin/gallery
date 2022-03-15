import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

export default function Modal({ open, onClose, info }) {
  if (!open) return null;
  // Use portal for modal
  return ReactDOM.createPortal(
    <Fragment>
      {/* The overlay */}
      <div className=" Overlay-styles"></div>
      {/* The modal */}
      <div className=" flex flex-column Modal-style">
        <h1 className="tc">{`Drawing Mike Trout every day until the lockout is over. ${info[0]}`}</h1>
        <img
          className="br2 w-40 h-40 center"
          src={process.env.PUBLIC_URL + info[2]}
          alt="face"
        ></img>
        <div className="flex justify-center">
          <button
            className="b--red hover-bg-red br2 bg-light-red ma2"
            onClick={() => window.open(info[3], "_blank")}
          >
            View Post
          </button>
          <button
            className="b--red hover-bg-red br2  bg-light-red  ma2"
            onClick={() => window.open(info[1], "_blank")}
          >
            Reference
          </button>
          <button
            className="b--red hover-bg-red br2  bg-light-red  ma2"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </Fragment>,
    // Grab the root id of portal for modal
    document.getElementById("portal")
  );
}
