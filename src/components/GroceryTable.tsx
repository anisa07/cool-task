import { useContext } from "react";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { ColumnData, GroceryColumnIds } from "../types/types";
import { TableHeader } from "./table/TableHeader";
import { TablePagination } from "./table/TablePagination";
import { TableWrapper } from "./table/TableWrapper";
import { TableHeaderRow } from "./table/TableHeaderRow";
import { TableBody } from "./table/TableBody";
import { loadGroceryDataService } from "../services/load-grocery-data-service";
import { TableContext } from "./table/TableContext";

const columns: ColumnData<GroceryColumnIds>[] = [
  {
    width: 200,
    label: "Name",
    id: "name",
    align: "left",
  },
  {
    width: 200,
    label: "Section",
    id: "section",
    align: "left",
  },
  {
    width: 200,
    label: "Price (€)",
    id: "price",
    numeric: true,
    align: "right",
  },
  {
    width: 200,
    label: "Weight / 100 g (€)",
    id: "weight",
    numeric: true,
    align: "right",
  },
];

export const GroceryTable = () => {
  const { tableOptions } = useContext(TableContext);

  const { isPending, error, data } = useQuery({
    queryKey: ["groceryData", tableOptions],
    queryFn: () => loadGroceryDataService(tableOptions).then((res) => res),
    placeholderData: keepPreviousData,
  });

  if (isPending) return "Loading...";

  if (error)
    return (
      "An error has occurred while fetching grocery data: " + error.message
    );

  return (
    <>
      <TableHeader
        tableName="Today's groceries"
        filterName="Filter by section"
      />
      <TableWrapper ariaLabel="grocery table">
        <TableHeaderRow columns={columns} />
        <TableBody rows={data?.groceries ?? []} columns={columns} />
      </TableWrapper>
      <TablePagination itemsCount={data?.itemsLength ?? 0} />
    </>
  );
};
