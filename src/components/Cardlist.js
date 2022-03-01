import React from "react";
import Card from "./Card";

const CardList = ({ path, randomSelect, changeinfo, images, open }) => {
  // const random = Math.floor(Math.random() * images.length);

  // need a unique key for map arrays, otherwise react wont like that

  return (
    <div>
      {images.map((user, i) => {
        if (path === "home") {
          if (randomSelect === i) {
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
          }
        } else {
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
        }
      })}
    </div>
  );
};

export default CardList;
