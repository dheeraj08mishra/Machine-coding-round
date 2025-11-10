import "./App.css";
import { useState } from "react";
import Modal from "./components/Modal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div>
      {!isModalOpen && (
        <button onClick={() => setIsModalOpen(true)}>Open Modal</button>
      )}
      {isModalOpen && (
        <Modal
          isModalOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="My Custom Modal"
        >
          <p>This is the content of the reusable modal.</p>
        </Modal>
      )}
    </div>
  );
}

export default App;
