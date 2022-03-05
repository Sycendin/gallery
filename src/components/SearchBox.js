import React, { Fragment } from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <Fragment>
      <h2 className="flex justify-center bg-light-red">
        Search for what day of the lockout the drawing was made below
      </h2>
      <input
        className="tc pa3 ba b--red bg-washed-red"
        type="search"
        placeholder="Day 50"
        onChange={searchChange}
      />
    </Fragment>
  );
};

export default SearchBox;
