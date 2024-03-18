/* eslint-disable @typescript-eslint/no-explicit-any */
import { Chart } from "./components/chart/Chart";
import { ChartForm } from "./components/chart/ChartForm";

const Observations = () => {
  return (
    <div className="w-100 p-4">
      <Chart />
      <ChartForm />
    </div>
  );
};

export { Observations };
