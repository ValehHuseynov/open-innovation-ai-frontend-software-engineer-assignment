import { QueryState } from "./_models";
const QUERIES = {
  OBSERVATIONS_LIST: "observations-list",
};

function isNotEmpty(obj: unknown) {
  return obj !== undefined && obj !== null && obj !== "";
}

function stringifyRequestQuery(state: QueryState): string {
  const filter = Object.entries(state)
    .filter((obj) => isNotEmpty(obj[1]))
    .map((obj) => {
      return `${obj[0]}=${obj[1]}`;
    })
    .join("&");

  return filter;
}

export { QUERIES, stringifyRequestQuery, isNotEmpty };
