import "./App.css";
import React, { Fragment, useEffect, useState } from "react";
import Modal from "./components/Modal";
import Images from "./Images";
import CardList from "./components/Cardlist";
import Nav from "./components/Nav";
import About from "./components/About";
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [changedInfo, setInfo] = useState([]);
  const [route, setRoute] = useState("home");
  const [random, setRandom] = useState(
    Math.floor(Math.random() * Images.length)
  );

  const infoChange = (event) => {
    setInfo(event);
  };
  const routeChange = (path) => {
    setRoute(path);
  };
  useEffect(() => {
    console.log("hello");
  }, [random]);
  return (
    <Fragment>
      <Nav routePass={routeChange}></Nav>
      {route === "home" || route === "all" ? (
        <div className="App">
          <h1 className="flex justify-center bg-light-red">
            Click on an image for more info
          </h1>
          {route === "home" ? (
            <button
              className=" pointer:hover br2 bg-light-red ma2 f6 fw5-ns dib pa2 no-underline bg-animate bg-white hover-bg-light-blue black"
              onClick={() =>
                setRandom(Math.floor(Math.random() * Images.length))
              }
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
    </Fragment>
  );
}

export default App;
