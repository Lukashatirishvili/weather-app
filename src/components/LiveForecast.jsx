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

function LiveForecast() {
  return (
    <>
      <div className="row background-img rounded-3 py-4 px-3">
        <div className="col">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div className="d-flex gap-2 align-items-center">
              <span>
                <FontAwesomeIcon icon={faLocationDot} />
              </span>
              <h4 className="m-0">Gotham</h4>
            </div>
            <div>
              <p className="m-0">Today 00:32PM</p>
            </div>
          </div>
          <div>
            <h1 className="m-0" style={{ fontSize: "70px" }}>
              14°
            </h1>
            <p className="m-0">Mostly clear</p>
          </div>
          <div className="d-flex justify-content-between align-items-center mt-4">
            <div className="d-flex gap-2">
              <span>
                <FontAwesomeIcon icon={faWind} />
              </span>
              <p>720ph</p>
            </div>
            <div className="d-flex gap-2">
              <span>
                <FontAwesomeIcon icon={faDroplet} />
              </span>
              <p>32%</p>
            </div>
            <div className="d-flex gap-2">
              <span>
                <FontAwesomeIcon icon={faWind} />
              </span>
              <p>12 km/h</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row gap-5 p-0">
        <div className="col temp-background p-3 rounded-3">
          <div className="row">
            <div className="col text-start">
              <p className="fw-semibold mb-1">Wind</p>
              <p style={{ fontSize: "13px", color: "grey" }}>
                Today wind speed
              </p>
              <p className="fw-semibold mt-1">12km/h</p>
            </div>
            <div className="col">
              <span style={{ fontSize: "50px", color: "#5e7489c3" }}>
                <FontAwesomeIcon icon={faCompass} />
              </span>
            </div>
          </div>
        </div>
        <div className="col temp-background p-3 rounded-3">
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
      <div className="row gap-5 p-0">
        <div className="col temp-background p-3 rounded-3">
          <div className="row">
            <div className="col text-start">
              <p className="fw-semibold mb-1">Pressure</p>
              <p style={{ fontSize: "13px", color: "grey" }}>Today pressure</p>
              <p className="fw-semibold mt-1">720hpa</p>
            </div>
            <div className="col">
              <span style={{ fontSize: "50px", color: "#5e7489c3" }}>
                <FontAwesomeIcon icon={faGauge} />
              </span>
            </div>
          </div>
        </div>
        <div className="col temp-background p-3 rounded-3">
          <div className="row">
            <div className="col text-start">
              <p className="fw-semibold mb-1">UV Index</p>
              <p style={{ fontSize: "13px", color: "grey" }}>Today UV Index</p>
              <p className="fw-semibold mt-1">2</p>
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
