import React, { Fragment } from "react";

const DrawingVideo = () => {
  return (
    <Fragment>
      <div className="flex justify-center">
        <div className="tc bg-light-red dib br3 pa3 ma2 bw2 shadow-5">
          <h2>All 97 Drawings</h2>
          <video width="768" height="432" controls>
            <source
              src={process.env.PUBLIC_URL + "/video/DrawingMikeTrout.mp4"}
              type="video/mp4"
            />
          </video>
          <div className="flex justify-center">
            <button
              className="b--red hover-bg-red br2 bg-light-red ma2"
              onClick={() =>
                window.open(
                  "https://old.reddit.com/r/baseball/comments/tbguy5/all_97_of_mike_trout_drawings_by_udiditforthestory/",
                  "_blank"
                )
              }
            >
              View Post
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default DrawingVideo;
