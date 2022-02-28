import React, { Fragment } from "react";
// enter properties
// destructure from props in the parameters
const Card = ({ day, text, link, directLink, change, open }) => {
  // destructure from props
  // const {name, email, id} = props;
  // change("something");
  return (
    // use Fragment so we don't need to wrap everything in <div>
    <Fragment>
      <div className="bg-light-red dib br3 pa3 ma2 grow bw2 shadow-5">
        <img
          className="smaller"
          onMouseOver={() => change([day, text, link, directLink])}
          onClick={() => open(true)}
          alt="gallery"
          style={{ height: 336, width: 294 }}
          src={link}
        />
        <div></div>
      </div>
    </Fragment>
  );
};
export default Card;
