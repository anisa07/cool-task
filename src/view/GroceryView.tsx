import Paper from "@mui/material/Paper";
import { TableProvider } from "../components/table/TableContext";
import { GroceryTable } from "../components/GroceryTable";

export const GroceryView = () => {
  return (
    <Paper
      sx={{
        minWidth: "500px",
        overflow: "hidden",
        p: "2rem",
      }}
      elevation={0}
    >
      <TableProvider>
        <GroceryTable />
      </TableProvider>
    </Paper>
  );
};
