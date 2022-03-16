import "./App.css";
import React, { Fragment, useEffect, useState } from "react";
import Modal from "./components/Modal/Modal";
import Images from "./components/DrawingsObject/Images";
import Nav from "./components/Navigation/Nav";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import images from "./components/DrawingsObject/Images";
import Home from "./components/Home/Home";
import AllImages from "./components/AllDrawings/AllImages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DrawingVideo from "./components/DrawingVideo/DrawingVideo";
function App() {
  // react hooks states
  const [isOpen, setIsOpen] = useState(false);
  const [changedInfo, setInfo] = useState([]);
  const [random, setRandom] = useState(
    Math.floor(Math.random() * Images.length)
  );
  const [searchfield, setSearchfield] = useState("");
  // function that sets the info of the image for the modal
  const infoChange = (event) => {
    setInfo(event);
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
      <h1 className="flex justify-center">Mike Trout Drawing Gallery</h1>
      <BrowserRouter>
        <div className="App">
          <Nav />
          <div className="pages">
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
                    onSearchChange={onSearchChange}
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
              <Route path="/video" element={<DrawingVideo />} />
            </Routes>
          </div>
          <div className="Button-wrapper">
            <Modal
              open={isOpen}
              info={changedInfo}
              onClose={() => setIsOpen(false)}
            ></Modal>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
