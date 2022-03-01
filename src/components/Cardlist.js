import React from "react";
import Card from "./Card";

const CardList = ({ path, randomSelect, changeinfo, images, open }) => {
  return (
    <div>
      {images.map((user, i) => {
        // Check if path is home
        if (path === "home") {
          //  If so then only render the card that matches the random number generated
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
          // If path isn't home then render all the cards
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
        return null;
      })}
    </div>
  );
};

export default CardList;
