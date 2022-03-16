import React, { Fragment } from "react";
const Footer = () => {
  return (
    <Fragment>
      <div className="fixed vh-10 w-100 bottom-0 bg-light-red black-80  ph1">
        <div className="tl f6">
          <p className="dib mr2 mr3-ns b">©2048 Your Company LLC, Inc.</p>
          <p className=" f6 ph3 pv2 mb2 dib black b">
            Drawings belong to u/DidItForTheStory{" "}
          </p>
        </div>
      </div>
    </Fragment>
  );
};
export default Footer;
