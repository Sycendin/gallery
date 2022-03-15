import React, { Fragment } from "react";
import SearchBox from "./SearchBox";
import CardList from "./Cardlist";
const AllImages = ({
  searchChange,
  image,
  path,
  randomSelect,
  open,
  changeinfo,
  images,
}) => {
  return (
    <Fragment>
      <SearchBox searchChange={searchChange} />
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
export default AllImages;
