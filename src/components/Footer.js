import React, { Fragment } from "react";
const Footer = () => {
  return (
    <Fragment>
      <div className="fixed vh-10 w-100 bottom-0 bg-light-red black-80  ph1">
        <div className="f6">
          <span className="dib mr4 mr5-ns b">©2048 Your Company LLC, Inc.</span>
          <button className="f6 link dim ba ph3 pv2 mb2 dib black">
            Terms
          </button>{" "}
          <span className=" b"> / </span>
          <button className="f6 link dim ba ph3 pv2 mb2 dib black">
            {" "}
            Privacy{" "}
          </button>{" "}
          <span className="b"> /</span>
          <p className=" f6 ph3 pv2 mb2 dib black b">
            Pictures belong to their respective owners{" "}
          </p>
        </div>
      </div>
    </Fragment>
  );
};
export default Footer;
