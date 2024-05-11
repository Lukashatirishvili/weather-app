import { faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function DailyForecast() {
  return (
    <div className="row justify-content-center py-4">
      <div className="mt-1 mb-4">
        <p className="fs-5 fw-semibold">This Week</p>
      </div>
      <div className="row gap-3">
        <div className="d-flex justify-content-between align-items-center weekF-background px-3 py-2 rounded-4">
          <div>
            <p>Today</p>
            <p style={{ fontSize: "13px", color: "grey" }}>12APR</p>
          </div>
          <p className="fw-semibold " style={{ fontSize: "25px" }}>
            14°
          </p>
          <span className="fs-3">
            <FontAwesomeIcon icon={faSun} />
          </span>
        </div>
        <div className="d-flex justify-content-between align-items-center weekF-background px-3 py-2 rounded-4">
          <div>
            <p>Today</p>
            <p style={{ fontSize: "13px", color: "grey" }}>12APR</p>
          </div>
          <p className="fw-semibold " style={{ fontSize: "25px" }}>
            14°
          </p>
          <span className="fs-3">
            <FontAwesomeIcon icon={faSun} />
          </span>
        </div>
        <div className="d-flex justify-content-between align-items-center weekF-background px-3 py-2 rounded-4">
          <div>
            <p>Today</p>
            <p style={{ fontSize: "13px", color: "grey" }}>12APR</p>
          </div>
          <p className="fw-semibold " style={{ fontSize: "25px" }}>
            14°
          </p>
          <span className="fs-3">
            <FontAwesomeIcon icon={faSun} />
          </span>
        </div>
        <div className="d-flex justify-content-between align-items-center weekF-background px-3 py-2 rounded-4">
          <div>
            <p>Today</p>
            <p style={{ fontSize: "13px", color: "grey" }}>12APR</p>
          </div>
          <p className="fw-semibold " style={{ fontSize: "25px" }}>
            14°
          </p>
          <span className="fs-3">
            <FontAwesomeIcon icon={faSun} />
          </span>
        </div>
        <div className="d-flex justify-content-between align-items-center weekF-background px-3 py-2 rounded-4">
          <div>
            <p>Today</p>
            <p style={{ fontSize: "13px", color: "grey" }}>12APR</p>
          </div>
          <p className="fw-semibold " style={{ fontSize: "25px" }}>
            14°
          </p>
          <span className="fs-3">
            <FontAwesomeIcon icon={faSun} />
          </span>
        </div>
      </div>
    </div>
  );
}

export default DailyForecast;
