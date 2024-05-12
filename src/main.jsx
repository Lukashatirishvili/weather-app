import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "../src/index.scss";
import { WeatherProvider } from "./context/WeatherContext.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <WeatherProvider>
        <App />
      </WeatherProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
