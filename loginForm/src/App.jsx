import { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <div>
      {isLoggedIn ? (
        <Dashboard setLoading={setLoading} setIsLoggedIn={setIsLoggedIn} />
      ) : loading ? (
        <div>Loading...</div>
      ) : (
        <Login setLoading={setLoading} setIsLoggedIn={setIsLoggedIn} />
      )}
    </div>
  );
}

export default App;
