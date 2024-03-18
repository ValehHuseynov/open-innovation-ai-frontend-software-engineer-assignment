import { QueryRequestProvider } from "./observations-list/core/QueryRequestProvider";
import { QueryResponseProvider } from "./observations-list/core/QueryResponseProvider";
import { ChartConfigProvider } from "./observations-list/components/chart/core/ChartConfigProvider";
import { Observations } from "./observations-list/ObservationsList";

const SeriesWrapper = () => {
  return (
    <QueryRequestProvider>
      <QueryResponseProvider>
        <ChartConfigProvider>
          <Observations />
        </ChartConfigProvider>
      </QueryResponseProvider>
    </QueryRequestProvider>
  );
};

export { SeriesWrapper };
