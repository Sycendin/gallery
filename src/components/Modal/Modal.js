import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

export default function Modal({ open, onClose, info }) {
  if (!open) return null;
  const widthdiv = info[4][1] + 200;
  console.log(widthdiv);
  // Use portal for modal
  return ReactDOM.createPortal(
    <Fragment>
      <div className="modal_styles">
        <div
          className="flex br2 center bg-light-red dib br3 bw2 shadow-5"
          style={{ height: info[4][1], width: info[4][0] + 500 }}
        >
          <img
            style={{ height: info[4][1], width: info[4][0] }}
            className="br2  center"
            src={process.env.PUBLIC_URL + info[2]}
            alt="face"
          ></img>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h2 className="tc">{`Drawing Mike Trout every day until the lockout is over. ${info[0]}`}</h2>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                marginTop: "auto",
                marginBottom: 10,
              }}
            >
              <button
                className="b--red hover-bg-red br2 bg-light-red  "
                onClick={() => window.open(info[3], "_blank")}
              >
                View Post
              </button>
              <button
                className="b--red hover-bg-red br2  bg-light-red "
                onClick={() => window.open(info[1], "_blank")}
              >
                Reference
              </button>
              <button
                className="b--red hover-bg-red br2  bg-light-red "
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* The overlay */}
      {/* <div className=" Overlay-styles"></div>

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
      </div> */}
    </Fragment>,
    // Grab the root id of portal for modal
    document.getElementById("portal")
  );
}
