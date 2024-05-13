import { Offcanvas } from "react-bootstrap";
import Itemlist from "./components/dashboardPage/Itemlist";
import Logo from "./components/dashboardPage/Logo";
import { useContext } from "react";
import { WeatherContext } from "./context/WeatherContext";

function Layout() {
  const { show, setShow } = useContext(WeatherContext);

  return (
    <>
      <div className="d-none d-lg-block col-2 border-right vh-100 ">
        <div className="pt-4">
          <Logo />
          <Itemlist />
        </div>
        <Offcanvas
          style={{ width: "240px" }}
          show={show}
          onHide={() => setShow(false)}
        >
          <Offcanvas.Body>
            <Logo />
            <Itemlist />
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </>
  );
}

export default Layout;
