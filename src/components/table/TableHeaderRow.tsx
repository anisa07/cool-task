import Box from "@mui/material/Box";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import visuallyHidden from "@mui/utils/visuallyHidden";
import { TableContext } from "./TableContext";
import { Key, useContext } from "react";
import { ColumnData } from "../../types/types";

export interface TableHeaderRowProps<T> {
  columns: ColumnData<T>[];
}

export const TableHeaderRow = <T,>({ columns }: TableHeaderRowProps<T>) => {
  const { tableOptions, setTableOptions } = useContext(TableContext);

  const handleSortColumn = (property: T) => {
    setTableOptions({
      ...tableOptions,
      orderBy: property,
      order: tableOptions.order === "asc" ? "desc" : "asc",
    });
  };

  return (
    <TableHead>
      <TableRow>
        {columns.map((column) => (
          <TableCell
            key={column.id as Key}
            style={{ width: column.width }}
            sortDirection={
              tableOptions.orderBy === column.id ? tableOptions.order : false
            }
            sx={{
              fontWeight: 600,
              fontSize: "14px",
              color: (theme) => theme.palette.text.secondary,
            }}
          >
            <TableSortLabel
              active={tableOptions.orderBy === column.id}
              direction={
                tableOptions.orderBy === column.id ? tableOptions.order : "asc"
              }
              onClick={() => handleSortColumn(column.id)}
            >
              {tableOptions.orderBy === column.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {tableOptions.order === "desc"
                    ? "sorted descending"
                    : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
            {column.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};
