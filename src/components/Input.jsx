import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import { WeatherContext } from "../context/WeatherContext";

function Input() {
  const { setShow, handleFetchForecast } = useContext(WeatherContext);
  const [query, setQuery] = useState("");
  return (
    <div className="d-flex align-items-center p-0">
      <div className="d-lg-none me-3" onClick={() => setShow(true)}>
        <span className="fs-3">
          <FontAwesomeIcon icon={faBars} />
        </span>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleFetchForecast(query);
        }}
        className="flex-fill position-relative"
      >
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="form-control"
          placeholder="Search something here..."
        />
        <span className="position-absolute search-icon">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </span>
      </form>
      <div className="ms-3">
        <img
          src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=740&t=st=1715419690~exp=1715420290~hmac=07eaecb958807cc66e5e769ad3195d08a5ca569dfdb37c135aecc468530260d2"
          alt=""
          className="img-fluid rounded-5 "
          style={{ width: "40px" }}
        />
      </div>
    </div>
  );
}

export default Input;
