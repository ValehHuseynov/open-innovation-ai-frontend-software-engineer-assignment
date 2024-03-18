import Form from "react-bootstrap/Form";
import { LineChartForm } from "./LineChartForm";
import { BarChartForm } from "./BarChartForm";
import { useChartConfig } from "./core/ChartConfigProvider";
import { ReactNode } from "react";

const ChartForm = () => {
  const { state, updateState } = useChartConfig();

  let renderChartForm: ReactNode;
  if (state.chartType === "line")
    renderChartForm = <LineChartForm state={state} updateState={updateState} />;
  else
    renderChartForm = <BarChartForm state={state} updateState={updateState} />;

  return (
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
          value={state.chartType}
          onChange={(e) => updateState(e.target.name, e.target.value)}
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
          value={state.title}
          onChange={(e) => updateState(e.target.name, e.target.value)}
        />
      </div>
      {renderChartForm}
    </div>
  );
};

export { ChartForm };
