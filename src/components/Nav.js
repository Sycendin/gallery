import React from "react";
const Nav = () => {
  return (
    <div className=" flex  lh-copy">
      <a
        className="br2 bg-light-red ma2 f6 fw5-ns dib pa2 no-underline bg-animate bg-white hover-bg-light-blue black"
        href="#0"
      >
        About{" "}
      </a>
      <a
        onClick={() =>
          window.open("https://old.reddit.com/user/DidItForTheStory", "_blank")
        }
        className="br2 bg-light-red ma2 f6 fw5-ns dib pa2 no-underline bg-animate bg-white hover-bg-light-blue black"
      >
        u/DidItForTheStory Link{" "}
      </a>
    </div>
  );
};
export default Nav;
