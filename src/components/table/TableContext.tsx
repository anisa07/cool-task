import { ReactNode, createContext, useState } from "react";
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

interface TableProviderProps<_T> {
  children: ReactNode;
}

export const TableProvider = <T,>({ children }: TableProviderProps<T>) => {
  const [tableOptions, setTableOptions] = useState<TableOptions<T>>({
    page: 0,
    rowsPerPage: 10,
    orderBy: undefined,
    order: "asc",
    filter: "",
  });

  return (
    <TableContext.Provider value={{ tableOptions, setTableOptions }}>
      {children}
    </TableContext.Provider>
  );
};
