import { Order } from "../types/types";

export const sortItems = <T>(
  items: T[],
  order: Order = "asc",
  key?: keyof T
): T[] => {
  if (!key) return items;
  return [...items].sort(
    (a, b) => (order === "asc" ? 1 : -1) * (a[key] > b[key] ? 1 : -1)
  );
};
