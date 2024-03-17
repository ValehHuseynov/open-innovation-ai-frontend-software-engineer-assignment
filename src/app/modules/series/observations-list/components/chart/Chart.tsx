import { FC, ReactNode } from "react";
import { Line, Bar } from "react-chartjs-2";
import { Observation } from "../../core/_models";
import { ChartProps } from "./core/_models";
import {
  useQueryResponseData,
  useQueryResponseLoading,
} from "../../core/QueryResponseProvider";
import { defaultOptions } from "./core/_helpers";

const Chart: FC<ChartProps> = ({ chartConfig }) => {
  const {
    chartType,
    title,
    backgroundColor,
    pointStyle,
    stepped,
    borderRadius,
  } = chartConfig;
  const response = useQueryResponseData();
  const isLoading = useQueryResponseLoading();

  if (isLoading) return;

  const labels = response?.map((obs: Observation) => obs.date);
  const datasets = [
    {
      label: "Observation",
      data: response?.map((obs: Observation) => Number(obs.value)),
      backgroundColor,
      pointStyle,
      stepped,
      borderRadius,
    },
  ];

  const chartData = {
    labels,
    datasets,
  };

  let renderChart: ReactNode;
  if (chartType === "line")
    renderChart = <Line data={chartData} options={defaultOptions} />;
  else renderChart = <Bar data={chartData} options={defaultOptions} />;

  return (
    <>
      <h2 className="text-center">{title}</h2>
      {renderChart}
    </>
  );
};

export { Chart };
