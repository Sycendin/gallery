import "./App.css";
import React, { Fragment, useState } from "react";
import Modal from "./components/Modal";
import Images from "./Images";
import CardList from "./components/Cardlist";
import Nav from "./components/Nav";
import About from "./components/About";
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [changedInfo, setInfo] = useState([]);
  const [route, setRoute] = useState("home");

  const infoChange = (event) => {
    setInfo(event);
  };
  const routeChange = (path) => {
    setRoute(path);
  };
  return (
    <Fragment>
      <Nav routePass={routeChange}></Nav>

      {route === "home" ? (
        <div className="App">
          <h1 className="flex justify-center bg-light-red">
            Click on an image for more info
          </h1>
          <div className="Button-wrapper">
            <Modal
              open={isOpen}
              info={changedInfo}
              onClose={() => setIsOpen(false)}
            >
              Modal
            </Modal>
          </div>
          <CardList open={setIsOpen} changeinfo={infoChange} images={Images} />
        </div>
      ) : route === "about" ? (
        <About></About>
      ) : null}
    </Fragment>
  );
}

export default App;
