import { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";
import { formatDate } from "../helper/formatDate";

function DailyForecast() {
  const { dailyForecast } = useContext(WeatherContext);

  const forecast = dailyForecast?.forecast?.forecastday ?? null;

  if (!forecast) return <div></div>;

  return (
    <div className="row justify-content-center py-4">
      <div className="mt-1 mb-4">
        <p className="fs-5 fw-semibold">This Week</p>
      </div>
      <div
        className="row gap-3 mt-2"
        style={{ maxHeight: "500px", overflowY: "auto" }}
      >
        {forecast.map((data) => (
          <div
            key={data.date_epoch}
            className="d-flex justify-content-between align-items-center weekF-background px-3 py-2 rounded-4"
          >
            <div>
              <p>Today</p>
              <p style={{ fontSize: "13px", color: "grey" }}>
                {formatDate(data.date)}
              </p>
            </div>
            <p className="fw-semibold " style={{ fontSize: "25px" }}>
              {data.day.maxtemp_c}°
            </p>

            <img
              src={data.day.condition?.icon}
              style={{ width: "40px" }}
              alt=""
              className="img-fluid"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default DailyForecast;
