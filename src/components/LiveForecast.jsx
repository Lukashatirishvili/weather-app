import {
  faChartSimple,
  faCompass,
  faDroplet,
  faGauge,
  faLocationDot,
  faUmbrella,
  faWind,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";

function LiveForecast() {
  const { liveForecast } = useContext(WeatherContext);

  const { location, current } = liveForecast;

  const time = location?.localtime?.split(" ")[1];

  if (liveForecast.length === 0)
    return (
      <div role="alert" className="alert alert-dark">
        Enter a city name to get the weather forecast
      </div>
    );

  return (
    <>
      <div className="row background-img rounded-3 py-4 px-3">
        <div className="col">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div className="d-flex gap-2 align-items-center">
              <span>
                <FontAwesomeIcon icon={faLocationDot} />
              </span>
              <h4 className="m-0">{`${location.name}, ${location.country}`}</h4>
            </div>
            <div>
              <p className="m-0">Today {time}</p>
            </div>
          </div>
          <div className="">
            <h1 className="m-0" style={{ fontSize: "70px" }}>
              {current.temp_c}°
            </h1>
            <p className="m-0 me-2">{current.condition.text}</p>
          </div>
          <div className="d-flex justify-content-between align-items-center mt-4">
            <div className="d-flex gap-2">
              <span>
                <FontAwesomeIcon icon={faWind} />
              </span>
              <p>{current.wind_degree}ph</p>
            </div>
            <div className="d-flex gap-2">
              <span>
                <FontAwesomeIcon icon={faDroplet} />
              </span>
              <p>{current.humidity}%</p>
            </div>
            <div className="d-flex gap-2">
              <span>
                <FontAwesomeIcon icon={faWind} />
              </span>
              <p>{current.wind_kph} km/h</p>
            </div>
          </div>
        </div>
      </div>

      <div className="row gap-4 p-0">
        <div className="col-md temp-background p-3 rounded-3">
          <div className="row">
            <div className="col text-start">
              <p className="fw-semibold mb-1">Wind</p>
              <p style={{ fontSize: "13px", color: "grey" }}>
                Today wind speed
              </p>
              <p className="fw-semibold mt-1">{current.wind_kph}km/h</p>
            </div>
            <div className="col">
              <span style={{ fontSize: "50px", color: "#5e7489c3" }}>
                <FontAwesomeIcon icon={faCompass} />
              </span>
            </div>
          </div>
        </div>
        <div className="col-md temp-background p-3 rounded-3">
          <div className="row">
            <div className="col text-start">
              <p className="fw-semibold mb-1">Rain Chance</p>
              <p style={{ fontSize: "13px", color: "grey" }}>
                Today rain chaince
              </p>
              <p className="fw-semibold mt-1">24%</p>
            </div>
            <div className="col">
              <span style={{ fontSize: "50px", color: "#5e7489c3" }}>
                <FontAwesomeIcon icon={faUmbrella} />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="row gap-4 p-0">
        <div className="col-md temp-background p-3 rounded-3">
          <div className="row">
            <div className="col text-start">
              <p className="fw-semibold mb-1">Pressure</p>
              <p style={{ fontSize: "13px", color: "grey" }}>Today pressure</p>
              <p className="fw-semibold mt-1">{current.pressure_mb}hpa</p>
            </div>
            <div className="col">
              <span style={{ fontSize: "50px", color: "#5e7489c3" }}>
                <FontAwesomeIcon icon={faGauge} />
              </span>
            </div>
          </div>
        </div>
        <div className="col-md temp-background p-3 rounded-3">
          <div className="row">
            <div className="col text-start">
              <p className="fw-semibold mb-1">UV Index</p>
              <p style={{ fontSize: "13px", color: "grey" }}>Today UV Index</p>
              <p className="fw-semibold mt-1">{current.uv}</p>
            </div>
            <div className="col">
              <span style={{ fontSize: "50px", color: "#5e7489c3" }}>
                <FontAwesomeIcon icon={faChartSimple} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LiveForecast;
