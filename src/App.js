import "./App.css";
import React, { useState } from "react";
import Modal from "./components/Modal";
function App() {
  function changeInfo(info) {
    modalInfo = info;
  }
  const [isOpen, setIsOpen] = useState(false);
  let modalInfo = "";
  return (
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
        <Modal open={isOpen} info={modalInfo} onClose={() => setIsOpen(false)}>
          Modal
        </Modal>
      </div>
      <div className="Other-content">Other content</div>
    </div>
  );
}

export default App;
