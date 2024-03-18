/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from "react";
import { Form } from "react-bootstrap";
import { ChartConfig } from "./core/_models";

type Props = {
  state: ChartConfig;
  updateState: (key: string, value: any) => void;
};

const BarChartForm: FC<Props> = ({ state, updateState }) => {
  return (
    <div className="col-2">
      <Form.Label htmlFor="borderRadius">Bar chart border radius</Form.Label>
      <Form.Control
        type="number"
        id="borderRadius"
        name="borderRadius"
        value={state.borderRadius}
        onChange={(e) => updateState(e.target.name, parseInt(e.target.value))}
      />
    </div>
  );
};

export { BarChartForm };
