/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from "react";
import { Form } from "react-bootstrap";
import { ChartConfig } from "./core/_models";

type Props = {
  state: ChartConfig;
  updateState: (key: string, value: any) => void;
};

const LineChartForm: FC<Props> = ({ state, updateState }) => {
  return (
    <>
      <div className="col-2">
        <Form.Label htmlFor="pointStyle">Point style</Form.Label>
        <Form.Select
          aria-label="Chart type"
          name="pointStyle"
          id="pointStyle"
          value={state.pointStyle}
          onChange={(e) => updateState(e.target.name, e.target.value)}
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
          value={String(state.stepped)}
          onChange={(e) =>
            updateState(e.target.name, e.target.value === "true")
          }
        >
          <option value="true">Active</option>
          <option value="false">Deactive</option>
        </Form.Select>
      </div>
    </>
  );
};

export { LineChartForm };
