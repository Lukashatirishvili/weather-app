import {
  faCalendarDays,
  faDollarSign,
  faGear,
  faHeart,
  faHouse,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

function Itemlist() {
  return (
    <div className="mt-5">
      <ul className="list-group gap-3">
        <NavLink
          to={"/"}
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

        <NavLink
          to={"/savedlocations"}
          className="list-group-item cursor-pointer"
          style={{
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <div className="d-flex align-items-center px-3 gap-2">
            <span>
              <FontAwesomeIcon icon={faHeart} />
            </span>
            <span>SavedLocations</span>
          </div>
        </NavLink>
        <NavLink
          to={"/calendar"}
          className="list-group-item cursor-pointer"
          style={{
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <div className="d-flex align-items-center px-3 gap-2">
            <span>
              <FontAwesomeIcon icon={faCalendarDays} />
            </span>
            <span>Calendar</span>
          </div>
        </NavLink>
        <NavLink
          to={"/converter"}
          className="list-group-item cursor-pointer"
          style={{
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <div className="d-flex align-items-center px-3 gap-2">
            <span>
              <FontAwesomeIcon icon={faDollarSign} />
            </span>
            <span>Converter</span>
          </div>
        </NavLink>
        <NavLink
          to={"/settings"}
          className="list-group-item cursor-pointer"
          style={{
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <div className="d-flex align-items-center px-3 gap-2">
            <span>
              <FontAwesomeIcon icon={faGear} />
            </span>
            <span>Settings</span>
          </div>
        </NavLink>
      </ul>
    </div>
  );
}

export default Itemlist;
