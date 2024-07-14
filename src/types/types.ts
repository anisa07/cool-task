export type Order = "asc" | "desc";

export type TextAlign = "left" | "right" | "center";

export interface ColumnData<T> {
  id: T;
  label: string;
  numeric?: boolean;
  width: number;
  align: TextAlign;
}

export interface TableOptions<C> {
  page: number;
  rowsPerPage: number;
  orderBy: C | undefined;
  order: Order;
  filter: string;
}

export interface GroceryData {
  id: number;
  name: string;
  section: string;
  price: number;
  weight: number;
}

export type GroceryColumnIds = "name" | "section" | "price" | "weight";
