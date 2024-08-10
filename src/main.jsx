import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import DarkModeProvider from "./Hooks/useDarkMode.jsx";
import { HashRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <DarkModeProvider>
    <App />
  </DarkModeProvider>
);
