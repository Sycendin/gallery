import React, { Fragment } from "react";
import "./About.css";
const About = () => {
  const message = `Currently, for the MLB there is a lockout between players and owners.
   This means that there will be no baseball until both sides come to a deal. One day a reddit
   user named u/IdidItForTheStory posted a drawing he made of Mike Trout calling it Drawing Mike 
   Trout every day until the lockout is over. Day 1 on the r/baseball subreddit. There were
   many reactions to the drawings that ranged from "This is art" to "What in the world is this?"
   u/IdidItForTheStory continued to post his drawings of Mike Trout for each day the lockout
   continued and r/baseball gathered around to view each drawing to see the improvment of 
   u/IdidItForTheStory's art and to see what reference the drawing made. These drawings have
   even gotten the attention of Mike Trout himself who actually followed himon Instagram. The
    drawings will continue to be posted until the MLB lockout is over, although depending on who
     you ask some people would be fine with the lockout goingon forever if it meant that we will 
     continue to get these drawings.`;
  return (
    <Fragment>
      <div className="flex justify-center">
        <div className="tc bg-light-red dib br3 pa3 ma2 grow bw2 shadow-5">
          <h1 className="outline  pa3 mr2">What is with these pictures?</h1>
          <p className="outline  pa3 mr2 new-line">{message}</p>
        </div>
      </div>
    </Fragment>
  );
};
export default About;
