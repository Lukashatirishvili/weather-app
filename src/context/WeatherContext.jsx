import { createContext, useEffect, useReducer, useState } from "react";
import axios from "axios";

const KEY = "5f318bb483d947428a593647241205";
const URL = "https://api.weatherapi.com/v1";

export const WeatherContext = createContext();

const initialState = {
  query: "",
  liveForecast: [],
  dailyForecast: [],
  savedLocations: [],
  error: "",
  isError: false,
  isLoading: false,
  locationName: "",
  mapPosition: { lat: 41.6938, lng: 44.8015 },
};

function reducer(state, action) {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, isLoading: true, error: null, isError: false };
    case "FETCH_ERROR":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        isError: true,
        liveForecast: [],
        dailyForecast: [],
      };
    case "FETCH_FORECAST": {
      const forecast = action.payload.liveForecast;
      const obj = { lat: forecast.location.lat, lng: forecast.location.lon };
      return {
        ...state,
        isLoading: false,
        liveForecast: action.payload.liveForecast,
        dailyForecast: action.payload.dailyForecast,
        mapPosition: obj,
        isError: false,
      };
    }

    case "SET_MAPPOSITION":
      return { ...state, mapPosition: action.payload };

    case "GETNAME_WITHCORDS":
      return { ...state, locationName: action.payload };
  }
}

export function WeatherProvider({ children }) {
  const [
    {
      query,
      liveForecast,
      dailyForecast,
      isLoading,
      mapPosition,
      locationName,
      error,
      isError,
    },
    dispatch,
  ] = useReducer(reducer, initialState);
  const [show, setShow] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios(
          `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${mapPosition.lat}&longitude=${mapPosition.lng}&localityLanguage=en`
        );
        dispatch({ type: "GETNAME_WITHCORDS", payload: res.data });
      } catch (error) {
        dispatch({ type: "FETCH_ERROR", payload: error });
      }
    }
    fetchData();
  }, [mapPosition]);

  useEffect(() => {
    handleFetchForecast("Tbilisi");
  }, []);

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
        mapPosition,
        locationName,
        error,
        isError,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
}
