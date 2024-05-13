import { useContext } from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvents,
} from "react-leaflet";
import { WeatherContext } from "../context/WeatherContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function Map() {
  const { mapPosition, locationName, setShow, handleFetchForecast } =
    useContext(WeatherContext);
  const navigate = useNavigate("/");

  return (
    <div className="col">
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
      <div className="p-3" style={{ height: "500px", width: "100%" }}>
        <MapContainer
          center={mapPosition}
          zoom={13}
          scrollWheelZoom={false}
          className="map"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
          />
          <Marker position={mapPosition}>
            <Popup>A adsfsa</Popup>
          </Marker>
          <DetectClick />
          <ChangeCenter mapPosition={mapPosition} />
        </MapContainer>
      </div>
    </div>
  );
}

function DetectClick() {
  const { dispatch } = useContext(WeatherContext);
  useMapEvents({
    click: (e) => {
      const lat = e?.latlng?.lat;
      const lng = e?.latlng?.lng;
      const obj = {
        lat: lat,
        lng: lng,
      };

      dispatch({ type: "SET_MAPPOSITION", payload: obj });
    },
  });
}

function ChangeCenter({ mapPosition }) {
  const map = useMap();
  map.setView(mapPosition);

  return null;
}

export default Map;
