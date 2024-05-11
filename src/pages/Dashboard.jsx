import DailyForecast from "../components/DailyForecast";
import ForecastSection from "../components/ForecastSection";
import Input from "../components/Input";

function Dashboard() {
  return (
    <>
      <div className="col border-right py-4 px-5">
        <div className="container text-center">
          <div className="row gap-4 justify-content-center">
            <Input />
            <ForecastSection />
          </div>
        </div>
      </div>
      <div className="col-lg-3 px-md-4 px-5 ">
        <DailyForecast />
      </div>
    </>
  );
}

export default Dashboard;
