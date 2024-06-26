import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "../src/index.scss";
import { WeatherProvider } from "./context/WeatherContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <WeatherProvider>
      <App />
    </WeatherProvider>
  </React.StrictMode>
);
