import { QueryRequestProvider } from "./observations-list/core/QueryRequestProvider";
import { QueryResponseProvider } from "./observations-list/core/QueryResponseProvider";
import { Observations } from "./observations-list/ObservationsList";

const SeriesWrapper = () => {
  return (
    <QueryRequestProvider>
      <QueryResponseProvider>
        <Observations />
      </QueryResponseProvider>
    </QueryRequestProvider>
  );
};

export { SeriesWrapper };
