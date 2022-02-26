import React from "react";
import Card from "./Card";

const CardList = ({ changeinfo, images, open }) => {
  // const cardArray= robots.map((user, i) =>{
  // need a unique key for map arrays, otherwise react wont like that
  // changeinfo("blash");
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
      {/* // {cardArray} */}
      {/* <Card id={robots[0].id} name={robots[0].name} email={robots[0].email} />
    <Card id={robots[1].id} name={robots[1].name} email={robots[1].email}/>
    <Card id={robots[2].id} name={robots[2].name} email={robots[2].email}/> */}
    </div>
  );
};

export default CardList;
