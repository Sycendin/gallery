import React from "react";
import Card from "./Card";

const CardList = ({ changeinfo, images, open }) => {
  // need a unique key for map arrays, otherwise react wont like that
  return (
    <div>
      {images.map((user, i) => {
        return (
          <Card
            key={i}
            link={images[i].link}
            day={images[i].day}
            text={images[i].text}
            directLink={images[i].directLink}
            change={changeinfo}
            open={open}
          />
        );
      })}
    </div>
  );
};

export default CardList;
