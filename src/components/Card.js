import React, { Fragment } from "react";

const Card = ({ day, text, link, directLink, change, open }) => {
  return (
    <Fragment>
      <div className="bg-light-red dib br3 pa3 ma2 grow bw2 shadow-5 w-40 h-40">
        <img
          className="smaller"
          onMouseOver={() => change([day, text, link, directLink])}
          onClick={() => open(true)}
          alt="gallery"
          style={{ height: "40%", width: "40%" }}
          src={process.env.PUBLIC_URL + link}
        />
        <div></div>
      </div>
    </Fragment>
  );
};
export default Card;
