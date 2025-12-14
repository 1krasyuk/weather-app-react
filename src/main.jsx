import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route } from "react-router";
import { UnitsProvider } from "./context/UnitsContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <UnitsProvider>
        <App />
      </UnitsProvider>
    </BrowserRouter>
  </StrictMode>
);
