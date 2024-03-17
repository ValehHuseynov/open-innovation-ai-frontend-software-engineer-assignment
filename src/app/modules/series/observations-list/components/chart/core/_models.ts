/* eslint-disable @typescript-eslint/no-explicit-any */

export type ChartConfig = {
  chartType: "line" | "bar";
  title: string;
  backgroundColor: string;
  pointStyle: "circle" | "rectRounded" | "rect" | "star" | "triangle" | "cross";
  stepped: boolean;
  borderRadius: number;
};

export type ChartProps = {
  chartConfig: ChartConfig;
};
