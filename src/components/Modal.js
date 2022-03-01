import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

export default function Modal({ open, onClose, info }) {
  if (!open) return null;
  return ReactDOM.createPortal(
    <Fragment>
      <div className=" Overlay-styles"></div>

      <div className=" flex flex-column Modal-style">
        <h1 className="tc">{`Drawing Mike Trout every day until the lockout is over. ${info[0]}`}</h1>
        <img className="br2 w-40 h-40 center" src={info[2]} alt="face"></img>
        <div className="flex justify-center">
          <button
            className="b--red hover-bg-red br2 bg-light-red ma2"
            onClick={() => window.open(info[3], "_blank")}
          >
            View Post
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
    document.getElementById("portal")
  );
}
