import axios, { AxiosResponse } from "axios";
import { ObservationsQueryResponse } from "./_models";

// GET Observations list
const getObservations = (query: string): Promise<ObservationsQueryResponse> => {
  return axios
    .get(`/series/observations?${query}`)
    .then(
      (response: AxiosResponse<ObservationsQueryResponse>) => response.data
    );
};

export { getObservations };
