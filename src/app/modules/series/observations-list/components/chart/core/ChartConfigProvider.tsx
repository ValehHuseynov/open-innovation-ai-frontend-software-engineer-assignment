/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, createContext, useContext, useState } from "react";
import {
  WithChildren,
  ChartConfig,
  ChartConfigContextProps,
  initialChartConfigState,
} from "./_models";

const ChartConfigContext = createContext<ChartConfigContextProps>(
  initialChartConfigState
);

const ChartConfigProvider: FC<WithChildren> = ({ children }) => {
  const [state, setState] = useState<ChartConfig>(
    initialChartConfigState.state
  );

  const updateState = (key: string, value: any) => {
    const updatedState = { ...state, [key]: value };
    setState(updatedState);
  };

  return (
    <ChartConfigContext.Provider value={{ state, updateState }}>
      {children}
    </ChartConfigContext.Provider>
  );
};

const useChartConfig = () => useContext(ChartConfigContext);
export { ChartConfigProvider, useChartConfig };
