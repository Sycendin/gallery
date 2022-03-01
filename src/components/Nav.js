import React from "react";
const Nav = ({ routePass }) => {
  return (
    <div className="flex lh-copy">
      <button
        onClick={() => routePass("home")}
        className=" pointer:hover br2 bg-light-red ma2 f6 fw5-ns dib pa2 no-underline bg-animate bg-white hover-bg-light-blue black"
      >
        Home
      </button>
      <button
        onClick={() => routePass("about")}
        className=" pointer:hover br2 bg-light-red ma2 f6 fw5-ns dib pa2 no-underline bg-animate bg-white hover-bg-light-blue black"
      >
        About
      </button>
      <button
        onClick={() =>
          window.open("https://old.reddit.com/user/DidItForTheStory", "_blank")
        }
        className="pointer:hover br2 bg-light-red ma2 f6 fw5-ns dib pa2 no-underline bg-animate bg-white hover-bg-light-blue black"
      >
        u/DidItForTheStory Link
      </button>
    </div>
  );
};
export default Nav;
