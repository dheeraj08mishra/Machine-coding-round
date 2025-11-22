import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./Component/NavBar.jsx";

function App() {
  return (
    <>
      <h1>Component for NavBar</h1>
      <Router>
        <NavBar />

        <Routes>
          <Route path="/" element={<div>Home Page</div>} />
          <Route path="/about" element={<div>About Page</div>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
