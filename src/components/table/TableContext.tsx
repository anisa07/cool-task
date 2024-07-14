import { createContext } from "react";
import { TableOptions } from "../../types/types";

export const TableContext = createContext<{
  tableOptions: TableOptions<any>;
  setTableOptions: (_o: TableOptions<any>) => void;
}>({
  tableOptions: {
    page: 0,
    rowsPerPage: 10,
    orderBy: undefined,
    order: "asc",
    filter: "",
  },
  setTableOptions: (_o: TableOptions<any>) => {},
});

export const TableProvider = TableContext.Provider;
