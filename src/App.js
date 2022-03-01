import "./App.css";
import React, { Fragment, useEffect, useState } from "react";
import Modal from "./components/Modal";
import Images from "./Images";
import CardList from "./components/Cardlist";
import Nav from "./components/Nav";
import About from "./components/About";
import Footer from "./components/Footer";
function App() {
  // react hooks states
  const [isOpen, setIsOpen] = useState(false);
  const [changedInfo, setInfo] = useState([]);
  const [route, setRoute] = useState("home");
  const [random, setRandom] = useState(
    Math.floor(Math.random() * Images.length)
  );
  // function that sets the info of the image for the modal
  const infoChange = (event) => {
    setInfo(event);
  };
  // fuction that sets the routes
  const routeChange = (path) => {
    setRoute(path);
  };

  const noSamePicture = () => {
    // the conditon for the while loop
    let generated = 1;
    while (generated !== 2) {
      // Make new random index from images array
      let newIndex = Math.floor(Math.random() * Images.length);
      // If the new index doesn't equal the current index then
      // set the random number state to that new index and
      // exit while loop otherwise keep repeating
      if (newIndex !== random) {
        setRandom(newIndex);
        generated = 2;
      }
    }
  };
  // Only update random when it is updated
  useEffect(() => {}, [random], [changedInfo]);
  return (
    <Fragment>
      <Nav routePass={routeChange}></Nav>
      {/* Render page based on route (home, all, about ) */}
      {route === "home" || route === "all" ? (
        <div className="App">
          <h1 className="flex justify-center bg-light-red">
            Click on an image for more info
          </h1>
          {/* Only render random button on home route */}
          {route === "home" ? (
            <button
              className=" pointer:hover br2 bg-light-red ma2 f6 fw5-ns dib pa2 no-underline bg-animate bg-white hover-bg-light-blue black"
              onClick={noSamePicture}
            >
              Random Image
            </button>
          ) : null}
          <div className="Button-wrapper">
            <Modal
              open={isOpen}
              info={changedInfo}
              onClose={() => setIsOpen(false)}
            >
              Modal
            </Modal>
          </div>
          <CardList
            path={route}
            randomSelect={random}
            open={setIsOpen}
            changeinfo={infoChange}
            images={Images}
          />
        </div>
      ) : route === "about" ? (
        <About></About>
      ) : null}
      <Footer></Footer>
    </Fragment>
  );
}

export default App;
