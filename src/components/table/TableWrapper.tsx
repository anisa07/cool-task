import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import { ReactNode } from "react";

export const TableWrapper = ({
  children,
  ariaLabel,
}: {
  children: ReactNode;
  ariaLabel: string;
}) => {
  return (
    <TableContainer
      sx={{
        maxHeight: `calc(100vh - 170px)`,
        "& .MuiTableCell-root": {
          borderRight: (theme) => `1px solid ${theme.palette.divider}`,
          borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
          "&:last-of-type": {
            borderRight: "none",
          },
        },
        border: (theme) => `1px solid ${theme.palette.divider}`,
        borderRadius: "4px",
      }}
    >
      <Table stickyHeader aria-label={ariaLabel} size="small">
        {children}
      </Table>
    </TableContainer>
  );
};
