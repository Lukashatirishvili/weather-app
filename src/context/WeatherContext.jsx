import { createContext, useReducer, useState } from "react";
import axios from "axios";

const KEY = "5f318bb483d947428a593647241205";
const URL = "https://api.weatherapi.com/v1";

export const WeatherContext = createContext();

const initialState = {
  query: "",
  liveForecast: [],
  dailyForecast: [],
  error: "",
  isLoading: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, isLoading: true, error: null };
    case "FETCH_ERROR":
      return { ...state, isLoading: false, error: action.payload };
    case "FETCH_FORECAST":
      return {
        ...state,
        isLoading: false,
        liveForecast: action.payload.liveForecast,
        dailyForecast: action.payload.dailyForecast,
      };
  }
}

export function WeatherProvider({ children }) {
  const [{ query, liveForecast, dailyForecast, isLoading }, dispatch] =
    useReducer(reducer, initialState);
  const [show, setShow] = useState(false);

  console.log(isLoading);

  async function handleFetchForecast(query) {
    dispatch({ type: "FETCH_REQUEST" });
    try {
      const liveForecastResponse = await axios(
        `${URL}/current.json?q=${query}&key=${KEY}`
      );
      const dailyForecastResponse = await axios(
        `${URL}/forecast.json?q=${query}&days=10&key=${KEY}`
      );
      dispatch({
        type: "FETCH_FORECAST",
        payload: {
          liveForecast: liveForecastResponse.data,
          dailyForecast: dailyForecastResponse.data,
        },
      });
    } catch (error) {
      dispatch({ type: "FETCH_ERROR", payload: error });
    }
  }

  return (
    <WeatherContext.Provider
      value={{
        show,
        setShow,
        query,
        dispatch,
        handleFetchForecast,
        liveForecast,
        dailyForecast,
        isLoading,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
}
