import React, { Fragment } from "react";
const Footer = () => {
  return (
    <Fragment>
      <div className="fixed w-100 bottom-0 bg-light-red white-80 pv1 pv1-l ph1">
        <p className="f6">
          <span className="dib mr4 mr5-ns">©2048 Your Company LLC, Inc.</span>
          <button className="link white-80 hover-light-purple">Terms</button> /
          <button className="link white-80 hover-gold"> Privacy </button> /
          <button className=" white-80 ">
            Pictures belong to their respective owners{" "}
          </button>
        </p>
      </div>
    </Fragment>
  );
};
export default Footer;
