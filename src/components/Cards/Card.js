import React, { Fragment } from "react";

const Card = ({
  day,
  reference,
  resolution,
  link,
  directLink,
  change,
  open,
}) => {
  return (
    <Fragment>
      <div
        className=" bg-light-red dib br3 pa3 ma2 grow bw2 shadow-5"
        style={{ height: "20%", width: "20%" }}
      >
        <img
          className="smaller"
          onMouseOver={() =>
            change([day, reference, link, directLink, resolution])
          }
          onClick={() => open(true)}
          alt="gallery"
          src={process.env.PUBLIC_URL + link}
        />
        <div></div>
      </div>
    </Fragment>
  );
};
export default Card;
