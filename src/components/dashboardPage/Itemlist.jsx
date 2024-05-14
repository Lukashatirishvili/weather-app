import { faHouse, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { WeatherContext } from "../../context/WeatherContext";

function Itemlist() {
  const { setShow } = useContext(WeatherContext);

  return (
    <div className="mt-5">
      <ul className="list-group gap-3">
        <NavLink
          to={"/"}
          onClick={() => setShow(false)}
          className="list-group-item cursor-pointer"
          style={{
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <div className="d-flex align-items-center px-3 gap-2">
            <span>
              <FontAwesomeIcon icon={faHouse} />
            </span>
            <span>Dashboard</span>
          </div>
        </NavLink>
        <NavLink
          to={"/map"}
          onClick={() => setShow(false)}
          className="list-group-item cursor-pointer"
          style={{
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <div className="d-flex align-items-center px-3 gap-2">
            <span>
              <FontAwesomeIcon icon={faLocationDot} />
            </span>
            <span>Map</span>
          </div>
        </NavLink>
      </ul>
    </div>
  );
}

export default Itemlist;
