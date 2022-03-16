import React, { Fragment } from "react";
import SearchBox from "../Searchbox/SearchBox";
import CardList from "../Cards/Cardlist";
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
      <div style={{ height: 100 }}></div>
    </Fragment>
  );
};
export default AllImages;
