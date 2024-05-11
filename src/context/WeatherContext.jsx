import { createContext, useState } from "react";

export const WeatherContext = createContext();

export function WeatherProvider({ children }) {
  const [show, setShow] = useState(false);
  return (
    <WeatherContext.Provider value={{ show, setShow }}>
      {children}
    </WeatherContext.Provider>
  );
}
