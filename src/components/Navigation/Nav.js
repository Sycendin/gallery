import React from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div className="flex justify-center lh-copy bb">
      <Link to="/gallery/">
        <button className=" pointer:hover br2 bg-light-red ma2 f6 fw5-ns dib pa2 no-underline bg-animate bg-white hover-bg-light-blue black">
          Home
        </button>
      </Link>
      <Link to="/gallery/about">
        <button className=" pointer:hover br2 bg-light-red ma2 f6 fw5-ns dib pa2 no-underline bg-animate bg-white hover-bg-light-blue black">
          About{" "}
        </button>
      </Link>
      <Link to="/gallery/all">
        <button className=" pointer:hover br2 bg-light-red ma2 f6 fw5-ns dib pa2 no-underline bg-animate bg-white hover-bg-light-blue black">
          All Images
        </button>
      </Link>
      <Link to="/gallery/video">
        <button className=" pointer:hover br2 bg-light-red ma2 f6 fw5-ns dib pa2 no-underline bg-animate bg-white hover-bg-light-blue black">
          Video of All Drawings
        </button>
      </Link>
      <button
        onClick={() =>
          window.open("https://old.reddit.com/user/DidItForTheStory", "_blank")
        }
        className="pointer:hover br2 bg-light-red ma2 f6 fw5-ns dib pa2 no-underline bg-animate bg-white hover-bg-light-blue black"
      >
        u/DidItForTheStory Reddit Account
      </button>
      <button
        onClick={() =>
          window.open("https://linktr.ee/DidItForTheStory", "_blank")
        }
        className="pointer:hover br2 bg-light-red ma2 f6 fw5-ns dib pa2 no-underline bg-animate bg-white hover-bg-light-blue black"
      >
        u/DidItForTheStory Other Links
      </button>
    </div>
  );
};
export default Nav;
