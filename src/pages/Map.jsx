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

import MapNavbar from "../components/mapPage/MapNavbar";

function Map() {
  const { mapPosition } = useContext(WeatherContext);

  return (
    <div className="col">
      <MapNavbar />
      <div className="p-3" style={{ height: "600px", width: "100%" }}>
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
