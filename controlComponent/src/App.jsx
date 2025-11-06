import { useState } from "react";
import "./App.css";

function App() {
  console.log("App component rendered");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [error, setError] = useState(false);

  const handleForm = () => {
    console.log("Form Data:", { email, password });
    if (email === "test@example.com" && password === "password123") {
      alert("Login Successful!");
      setError(false);
      setErrorMessage("");
    } else {
      setError(true);
      setErrorMessage("Invalid credentials");
    }
    setEmail("");
    setPassword("");
  };

  return (
    <>
      {/* <Uncontrolled /> */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          gap: "30px",
        }}
      >
        <h2>Login Form</h2>

        <input
          type="email"
          value={email}
          placeholder="enter valid email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          value={password}
          placeholder="enter valid password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleForm} disabled={!email || !password}>
          Login
        </button>
        {error && <p style={{ color: "red" }}>{errorMessage}</p>}
      </div>
    </>
  );
}

export default App;
