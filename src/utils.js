import { devices } from "./Constants";

export const queries = Object.entries(devices).reduce(
  (acc, [queryName, queryValue]) => {
    const query = Object.entries(queryValue).reduce((accum, [key, value]) => {
      if (key === "min") return [...accum, `(min-width: ${value}px)`];
      if (key === "max") return [...accum, `(max-width: ${value}px)`];
      return [...accum, `(${key}: ${value})`];
    }, []);
    return { ...acc, [queryName]: query.join(" and ") };
  },
  {}
);
