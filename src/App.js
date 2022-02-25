import "./App.css";
import React, { useState } from "react";
import Modal from "./components/Modal";
function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="App">
      <div className="Button-wrapper">
        <button onClick={() => setIsOpen(true)}>Open Modal</button>
        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
          Modal
        </Modal>
      </div>
      <div className="Other-content">Other content</div>
    </div>
  );
}

export default App;
