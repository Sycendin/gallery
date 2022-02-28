import "./App.css";
import React, { Fragment, useState } from "react";
import Modal from "./components/Modal";
import Images from "./Images";
import CardList from "./components/Cardlist";
import Nav from "./components/Nav";
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [changedInfo, setInfo] = useState([]);

  const infoChange = (event) => {
    setInfo(event);
  };

  return (
    <Fragment>
      <Nav></Nav>
      <h1 className="flex justify-center bg-light-red">
        Click on an image for more info
      </h1>
      <div className="App">
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
    </Fragment>
  );
}

export default App;
