import React, { Fragment } from "react";
import CardList from "../Cards/Cardlist";
const Home = ({
  image,
  path,
  randomSelect,
  open,
  changeinfo,
  images,
  noSamePicture,
}) => {
  return (
    <Fragment>
      <h2 className="flex justify-center bg-light-red">
        Click on an image for more info
      </h2>
      <button
        className=" pointer:hover br2 bg-light-red ma2 f6 fw5-ns dib pa2 no-underline bg-animate bg-white hover-bg-light-blue black"
        onClick={noSamePicture}
      >
        Random Image
      </button>
      <CardList
        image={image}
        path={path}
        randomSelect={randomSelect}
        open={open}
        changeinfo={changeinfo}
        images={images}
      />
    </Fragment>
  );
};
export default Home;
