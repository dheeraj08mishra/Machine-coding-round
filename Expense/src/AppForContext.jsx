import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

import Setting from "./Pages/Setting";
import Home from "./Pages/Home";
import Report from "./Pages/Report";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <>
      <nav style={{ display: "flex", gap: 20, padding: 10 }}>
        <Link to="/">Home</Link>
        <Link to="/setting">Setting</Link>
        <Link to="/report">Report</Link>
      </nav>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/report" element={<Report />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
