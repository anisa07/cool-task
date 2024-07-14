import MUITableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { Key } from "react";
import { ColumnData } from "../../types/types";

interface TableBodyProps<TableRowsType, TableCOlumnsType> {
  rows: TableRowsType[];
  columns: ColumnData<TableCOlumnsType>[];
}

export const TableBody = <
  TableRowsType extends {
    id: number;
    [key: string]: any;
  },
  TableCOlumnsType extends keyof TableRowsType
>({
  rows,
  columns,
}: TableBodyProps<TableRowsType, TableCOlumnsType>) => {
  return (
    <MUITableBody
      sx={{
        "& .MuiTableCell-body": {
          fontSize: "12px",
        },
      }}
    >
      {rows.length === 0 && (
        <TableRow>
          <TableCell>No data</TableCell>
        </TableRow>
      )}
      {rows.map((row) => {
        return (
          <TableRow hover tabIndex={-1} key={row.id}>
            {columns.map((column) => {
              const value = row?.[column.id];
              return (
                <TableCell key={column.id as Key} align={column.align}>
                  {value}
                </TableCell>
              );
            })}
          </TableRow>
        );
      })}
    </MUITableBody>
  );
};
