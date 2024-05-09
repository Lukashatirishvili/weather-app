import { faCloud } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Logo() {
  return (
    <div className="d-flex justify-content-center align-items-center gap-2">
      <span className="fs-3 cloud-color">
        <FontAwesomeIcon icon={faCloud} />
      </span>
      <h3 className="m-0">Weather</h3>
    </div>
  );
}

export default Logo;
