import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AppForContext from "./AppForContext.jsx";
import { GlobalProvider } from "./Context/GlobalContext.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <BrowserRouter>
      <GlobalProvider>
        <AppForContext />
      </GlobalProvider>
    </BrowserRouter>
  </StrictMode>
);
