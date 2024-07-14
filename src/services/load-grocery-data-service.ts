import { GroceryColumnIds, TableOptions, GroceryData } from "../types/types";
import { filterItems } from "../utils/filter-items";
import { paginate } from "../utils/pagination";
import { sortItems } from "../utils/sort-items";
import { groceryItems } from "./data";

// fake API call
export const loadGroceryDataService = async (
  options: TableOptions<GroceryColumnIds>
): Promise<{ groceries: GroceryData[]; itemsLength: number }> => {
  const { page, rowsPerPage, orderBy, order, filter } = options;
  const filteredItems = filterItems(groceryItems, "section", filter);
  const sortedItems = sortItems(filteredItems, order, orderBy);
  const groceries = paginate(sortedItems, page, rowsPerPage);

  return Promise.resolve({ groceries, itemsLength: filteredItems.length });
};
