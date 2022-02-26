import "./App.css";
import React, { Fragment, useState } from "react";
import Modal from "./components/Modal";
import Images from "./Images";
import CardList from "./components/Cardlist";
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [changedInfo, setInfo] = useState([]);
  let modalInfo = "";
  const changeInfo = (info) => {
    modalInfo = info;
  };
  const infoChange = (event) => {
    setInfo(event);
  };

  return (
    <Fragment>
      <div className="App">
        <div className="Button-wrapper">
          <button onClick={() => setIsOpen(true)}>Open Modal</button>
          <img
            className="gallery-image"
            onMouseOver={changeInfo(
              "https://cdn.discordapp.com/attachments/788247984517283880/933260764351963206/MikeTroutFace.png"
            )}
            onClick={() => setIsOpen(true)}
            style={{ height: 300, width: 200 }}
            src="https://cdn.discordapp.com/attachments/788247984517283880/933260764351963206/MikeTroutFace.png"
            alt="mike"
          ></img>
          <Modal
            open={isOpen}
            info={modalInfo}
            onClose={() => setIsOpen(false)}
          >
            Modal
          </Modal>
        </div>
        <CardList open={setIsOpen} changeinfo={infoChange} images={Images} />
      </div>
      <h1>{changedInfo[0]}</h1>
    </Fragment>
  );
}

export default App;
