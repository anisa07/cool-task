import MUITablePagination from "@mui/material/TablePagination";
import { useContext } from "react";
import {} from "@mui/material/styles";
import { TableContext } from "./TableContext";

interface TablePaginationProps {
  itemsCount: number;
}

export const TablePagination = ({ itemsCount }: TablePaginationProps) => {
  const { tableOptions, setTableOptions } = useContext(TableContext);

  const handleChangePage = (_: unknown, newPage: number) => {
    setTableOptions({
      ...tableOptions,
      page: newPage,
    });
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTableOptions({
      ...tableOptions,
      page: 0,
      rowsPerPage: +event.target.value,
    });
  };

  return (
    <MUITablePagination
      rowsPerPageOptions={[10, 25, 100]}
      component="div"
      count={itemsCount}
      rowsPerPage={tableOptions.rowsPerPage}
      page={tableOptions.page}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
      sx={{
        display: "flex",
        "& .MuiTablePagination-toolbar": {
          paddingLeft: 0,
          color: (theme) => theme.palette.text.secondary,
          "& .MuiSelect-select": {
            color: (theme) => theme.palette.text.primary,
            fontSize: "13px",
          },
          "& .MuiTablePagination-selectLabel": {
            fontSize: "12px",
          },
          "& .MuiTablePagination-displayedRows": {
            fontSize: "12px",
          },
          "& .MuiSvgIcon-root": {
            width: "20px",
            height: "20px",
          },
        },
      }}
    />
  );
};
