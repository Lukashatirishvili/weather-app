import { useContext } from "react";
import LiveForecast from "./LiveForecast";
import { WeatherContext } from "../context/WeatherContext";
import { Spinner } from "react-bootstrap";

function ForecastSection() {
  const { isLoading } = useContext(WeatherContext);

  if (isLoading) {
    return (
      <div style={{ marginTop: "160px" }}>
        <Spinner
          animation="border"
          role="status"
          style={{
            width: "5rem",
            height: "5rem",
            borderWidth: "0.5em",
            animationDuration: "1s",
          }}
          className=""
        />
      </div>
    );
  }
  return (
    <>
      <LiveForecast />
    </>
  );
}

export default ForecastSection;
