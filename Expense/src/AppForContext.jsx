import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { Suspense, lazy } from "react";

// import Setting from "./Pages/Setting";
// import Home from "./Pages/Home";
// import Report from "./Pages/Report";
// // import NotFound from "./Pages/NotFound";

const NotFound = lazy(() => import("./Pages/NotFound"));
const Home = lazy(() => import("./Pages/Home"));
const Setting = lazy(() => import("./Pages/Setting"));
const Report = lazy(() => import("./Pages/Report"));

function App() {
  return (
    <>
      <nav style={{ display: "flex", gap: 20, padding: 10 }}>
        <Link to="/">Home</Link>
        <Link to="/setting">Setting</Link>
        <Link to="/report">Report</Link>
      </nav>
      <hr />
      {/* <ErrorBoundary> */}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/report" element={<Report />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      {/* </ErrorBoundary> */}
    </>
  );
}

export default App;
