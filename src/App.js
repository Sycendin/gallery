import "./App.css";
import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Modal from "./components/Modal";
import Images from "./Images";
import Nav from "./components/Nav";
import About from "./components/About";
import Footer from "./components/Footer";
import images from "./Images";
import Home from "./components/Home";
import AllImages from "./components/AllImages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  // react hooks states
  const [isOpen, setIsOpen] = useState(false);
  const [changedInfo, setInfo] = useState([]);
  const [route, setRoute] = useState("home");
  const [random, setRandom] = useState(
    Math.floor(Math.random() * Images.length)
  );
  const [searchfield, setSearchfield] = useState("");
  // function that sets the info of the image for the modal
  const infoChange = (event) => {
    setInfo(event);
  };
  // fuction that sets the routes
  const routeChange = (path) => {
    setSearchfield("");
    setRoute(path);
  };
  // search the images
  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  };
  const filteredImages = images.filter((drawing) => {
    return drawing.day.toLowerCase().includes(searchfield.toLowerCase());
  });
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
      <BrowserRouter>
        <div className="App">
          <Nav />

          <div className="content">
            <Routes>
              <Route
                path="/"
                element={
                  <Home
                    noSamePicture={noSamePicture}
                    image={filteredImages}
                    path={"home"}
                    randomSelect={random}
                    open={setIsOpen}
                    changeinfo={infoChange}
                    images={Images}
                  />
                }
              />
              <Route path="/about" element={<About />} />
              <Route
                path="/all"
                element={
                  <AllImages
                    noSamePicture={noSamePicture}
                    image={filteredImages}
                    path={"all"}
                    randomSelect={random}
                    open={setIsOpen}
                    changeinfo={infoChange}
                    images={Images}
                  />
                }
              />
            </Routes>
          </div>
          <div className="Button-wrapper">
            <Modal
              open={isOpen}
              info={changedInfo}
              onClose={() => setIsOpen(false)}
            >
              Modal
            </Modal>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
