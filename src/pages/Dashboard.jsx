import DailyForecast from "../components/DailyForecast";
import ForecastSection from "../components/ForecastSection";
import Input from "../components/Input";

function Dashboard() {
  return (
    <>
      <div className="col-7  border-right py-4 px-5">
        <div className="container text-center">
          <div className="row gap-4 justify-content-center">
            <Input />
            <ForecastSection />
          </div>
        </div>
      </div>
      <div className="col-3 px-4">
        <DailyForecast />
      </div>
    </>
  );
}

export default Dashboard;
