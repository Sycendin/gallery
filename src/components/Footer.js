import React, { Fragment } from "react";
const Footer = () => {
  return (
    <Fragment>
      <div className="fixed vh-10 w-100 bottom-0 bg-light-red white-80 ph1">
        <p className="f6">
          <span className="dib mr4 mr5-ns">©2048 Your Company LLC, Inc.</span>
          <button className="f6 link dim ba ph3 pv2 mb2 dib black">
            Terms
          </button>{" "}
          /
          <button className="f6 link dim ba ph3 pv2 mb2 dib black">
            {" "}
            Privacy{" "}
          </button>{" "}
          /
          <h3 className=" f6 ph3 pv2 mb2 dib black ">
            Pictures belong to their respective owners{" "}
          </h3>
        </p>
      </div>
    </Fragment>
  );
};
export default Footer;
