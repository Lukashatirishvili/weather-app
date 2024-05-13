import { useContext, useState } from "react";
import { WeatherContext } from "../../context/WeatherContext";
import { formatDate } from "../../helper/formatDate";
import { getDayOfWeek } from "../../helper/getDayofWeek";
import { Carousel } from "react-bootstrap";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function DailyForecast() {
  const { dailyForecast } = useContext(WeatherContext);
  const [indexCarousel, setIndexCarousel] = useState(0);

  function handleSelect() {
    setIndexCarousel((index) => (index === 0 ? 1 : 0));
  }

  const forecast = dailyForecast?.forecast?.forecastday ?? null;

  if (!forecast) return <div></div>;

  return (
    <div className="row justify-content-center py-4">
      <div className="mt-1 mb-4 d-flex justify-content-center align-items-center">
        <span
          onClick={() => handleSelect()}
          className="fs-5 me-4 p-1 cursor-pointer"
        >
          <FontAwesomeIcon icon={faAngleLeft} />
        </span>
        <p className="fs-5 fw-semibold">
          {indexCarousel === 0 ? "This Week" : "This Day"}
        </p>
        <span
          onClick={() => handleSelect()}
          className="fs-5 ms-4 p-1 cursor-pointer"
        >
          <FontAwesomeIcon icon={faAngleRight} />
        </span>
      </div>
      <div className="row gap-3 mt-2 dailyContainer">
        <Carousel activeIndex={indexCarousel}>
          <Carousel.Item>
            {forecast.map((data, i) => (
              <div
                key={data.date_epoch}
                className="d-flex justify-content-between align-items-center text-dark weekF-background mb-3 px-3 py-2 rounded-4"
              >
                <div>
                  <p>{i === 0 ? "Today" : getDayOfWeek(data.date)}</p>
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
          </Carousel.Item>
          <Carousel.Item>
            {forecast[0].hour.map((data, i) => (
              <div
                key={i}
                className="d-flex justify-content-between align-items-center text-dark weekF-background px-3 py-2 mb-3 rounded-4"
              >
                <div>
                  <p>{data.time.split(" ")[1]}</p>
                </div>
                <p className="fw-semibold " style={{ fontSize: "25px" }}>
                  {data.temp_c}°
                </p>

                <img
                  src={data.condition?.icon}
                  style={{ width: "40px" }}
                  alt=""
                  className="img-fluid"
                />
              </div>
            ))}
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default DailyForecast;
