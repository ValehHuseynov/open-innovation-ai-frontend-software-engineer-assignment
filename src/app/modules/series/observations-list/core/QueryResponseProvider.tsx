/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react-hooks/exhaustive-deps */
import {
  FC,
  useContext,
  useState,
  useEffect,
  useMemo,
  createContext,
} from "react";
import { useQuery } from "react-query";
import { QUERIES, stringifyRequestQuery } from "./_helpers";
import {
  WithChildren,
  Observations,
  QueryResponseContextProps,
  initialQueryResponse,
} from "./_models";
import { getObservations } from "./_requests";
import { useQueryRequest } from "./QueryRequestProvider";

const QueryResponseContext =
  createContext<QueryResponseContextProps<Observations>>(initialQueryResponse);

const QueryResponseProvider: FC<WithChildren> = ({ children }) => {
  const { state } = useQueryRequest();
  const [query, setQuery] = useState<string>(stringifyRequestQuery(state));
  const updatedQuery = useMemo(() => stringifyRequestQuery(state), [state]);

  useEffect(() => {
    if (query !== updatedQuery) setQuery(updatedQuery);
  }, [state]);

  const {
    isLoading,
    refetch,
    data: response,
  } = useQuery(
    `${QUERIES.OBSERVATIONS_LIST}-${query}`,
    () => getObservations(query),
    { cacheTime: 0, keepPreviousData: true, refetchOnWindowFocus: false }
  );

  return (
    <QueryResponseContext.Provider value={{ isLoading, refetch, response }}>
      {children}
    </QueryResponseContext.Provider>
  );
};

const useQueryResponse = () => useContext(QueryResponseContext);

const useQueryResponseData = () => {
  const { response } = useQueryResponse();
  if (!response) return [];
  return response.data?.observations || [];
};

const useQueryResponseLoading = (): boolean => {
  const { isLoading } = useQueryResponse();
  return isLoading;
};

export {
  QueryResponseProvider,
  useQueryResponse,
  useQueryResponseData,
  useQueryResponseLoading,
};
