/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Chart } from "./components/chart/Chart";
import Form from "react-bootstrap/Form";
import { ChartConfig } from "./components/chart/core/_models";

const Observations = () => {
  const [chartConfig, setChartConfig] = useState<ChartConfig>({
    chartType: "line",
    title: "Observation chart",
    backgroundColor: "f79349",
    pointStyle: "circle",
    stepped: false,
    borderRadius: 0,
  });

  const handleChangeConfig = (key: string, value: any) => {
    setChartConfig((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <div className="w-100 p-4">
      <Chart chartConfig={chartConfig} />

      <div className="row mt-5">
        <div className="col-12 text-center">
          <h2>Chart editing area</h2>
        </div>
        <div className="col-2">
          <Form.Label htmlFor="type">Chart type</Form.Label>
          <Form.Select
            aria-label="Chart type"
            name="chartType"
            id="type"
            onChange={(e) => handleChangeConfig(e.target.name, e.target.value)}
          >
            <option value="line">Line</option>
            <option value="bar">Bar</option>
          </Form.Select>
        </div>
        <div className="col-2">
          <Form.Label htmlFor="title">Chart title</Form.Label>
          <Form.Control
            type="text"
            id="title"
            name="title"
            value={chartConfig.title}
            onChange={(e) => handleChangeConfig(e.target.name, e.target.value)}
          />
        </div>
        <div className="col-1">
          <Form.Label htmlFor="backgroundColor">Chart color</Form.Label>
          <Form.Control
            type="color"
            id="backgroundColor"
            name="backgroundColor"
            value={chartConfig.backgroundColor}
            onChange={(e) => handleChangeConfig(e.target.name, e.target.value)}
          />
        </div>
        <div className="col-2">
          <Form.Label htmlFor="pointStyle">Point style</Form.Label>
          <Form.Select
            aria-label="Chart type"
            name="pointStyle"
            id="pointStyle"
            value={chartConfig.pointStyle}
            onChange={(e) => handleChangeConfig(e.target.name, e.target.value)}
          >
            <option value="circle">Circle</option>
            <option value="rectRounded">Rect Rounded</option>
            <option value="rect">Rect</option>
            <option value="star">Star</option>
            <option value="triangle">Triangle</option>
            <option value="cross">Cross</option>
          </Form.Select>
        </div>
        <div className="col-2">
          <Form.Label htmlFor="pointStyle">Stepped</Form.Label>
          <Form.Select
            aria-label="Chart type"
            name="stepped"
            id="stepped"
            value={String(chartConfig.stepped)}
            onChange={(e) =>
              handleChangeConfig(e.target.name, e.target.value === "true")
            }
          >
            <option value="true">Active</option>
            <option value="false">Deactive</option>
          </Form.Select>
        </div>
        <div className="col-2">
          <Form.Label htmlFor="title">Bar chart border radius</Form.Label>
          <Form.Control
            type="number"
            id="borderRadius"
            name="borderRadius"
            value={chartConfig.borderRadius}
            onChange={(e) =>
              handleChangeConfig(e.target.name, parseInt(e.target.value))
            }
          />
        </div>
      </div>
    </div>
  );
};

export { Observations };
