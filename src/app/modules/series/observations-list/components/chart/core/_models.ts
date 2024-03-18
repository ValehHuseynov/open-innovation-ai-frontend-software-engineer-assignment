/* eslint-disable @typescript-eslint/no-explicit-any */

import { ReactNode } from "react";

export type ChartConfig = {
  chartType: "line" | "bar";
  title: string;
  backgroundColor: string;
  pointStyle: "circle" | "rectRounded" | "rect" | "star" | "triangle" | "cross";
  stepped: boolean;
  borderRadius: number;
};

export type WithChildren = {
  children: ReactNode;
};

export const initialChartState: ChartConfig = {
  chartType: "line",
  title: "Observation chart",
  backgroundColor: "#f91a9c",
  pointStyle: "circle",
  stepped: false,
  borderRadius: 0,
};

export type ChartConfigContextProps = {
  state: ChartConfig;
  updateState: (key: string, value: any) => void;
};

export const initialChartConfigState: ChartConfigContextProps = {
  state: initialChartState,
  updateState: () => {},
};
