import React, { Fragment } from "react";
import SearchBox from "./SearchBox";
import CardList from "./Cardlist";
const AllImages = ({
  onSearchChange,
  image,
  path,
  randomSelect,
  open,
  changeinfo,
  images,
}) => {
  return (
    <Fragment>
      <SearchBox searchChange={onSearchChange} />
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
