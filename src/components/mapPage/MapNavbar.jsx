import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { WeatherContext } from "../../context/WeatherContext";
import { useNavigate } from "react-router-dom";

function MapNavbar() {
  const navigate = useNavigate();
  const { locationName, setShow, handleFetchForecast } =
    useContext(WeatherContext);

  return (
    <div className="px-3 pt-3 d-flex align-items-center gap-3">
      <div className="d-lg-none me-3" onClick={() => setShow(true)}>
        <span className="fs-3">
          <FontAwesomeIcon icon={faBars} />
        </span>
      </div>
      <div className="d-flex align-items-center gap-4">
        <p className="fw-semibold fs-5">{locationName.city}</p>
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={() => {
            handleFetchForecast(locationName.city);
            navigate("/");
          }}
        >
          Click to see weather
        </button>
      </div>
    </div>
  );
}

export default MapNavbar;
