export const paginate = <T>(
  items: T[],
  page: number,
  itemsPerPage: number
): T[] => items.slice(page * itemsPerPage, page * itemsPerPage + itemsPerPage);
