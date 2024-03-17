import { ReactNode } from "react";

export type Response<T> = {
  data?: T;
};

export type Observation = {
  realtime_start: Date;
  realtime_end: Date;
  date: Date;
  value: string;
};

export type Observations = {
  realtime_start: Date;
  realtime_end: Date;
  observation_start: Date;
  observation_end: Date;
  units: string;
  output_type: number;
  file_type: string;
  order_by: string;
  sort_order: string;
  count: number;
  offset: number;
  limit: number;
  observations: Observation[];
};

export type ObservationsQueryResponse = Response<Observations>;

export type SortState = {
  sort_order?: "asc" | "desc";
};

export type SearchState = {
  series_id?: string;
};

export type QueryState = SortState & SearchState;

export type QueryRequestContextProps = {
  state: QueryState;
  updateState: (updates: Partial<QueryState>) => void;
};

export const initialQueryState: QueryState = {
  sort_order: "asc",
  series_id: "GNPCA",
};

export const initialQueryRequest: QueryRequestContextProps = {
  state: initialQueryState,
  updateState: () => {},
};

export type QueryResponseContextProps<T> = {
  response?: Response<T>;
  refetch: () => void;
  isLoading: boolean;
};

export const initialQueryResponse = { refetch: () => {}, isLoading: false };

export type WithChildren = {
  children?: ReactNode;
};
