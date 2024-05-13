import { Outlet } from "react-router-dom";
import Layout from "../Layout";

function Homepage() {
  return (
    <div className="container-fluid text-center">
      <div className="row">
        <Layout />
        <Outlet />
      </div>
    </div>
  );
}

export default Homepage;
