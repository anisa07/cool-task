export const filterItems = <T>(
  items: T[],
  filterBy: keyof T,
  filter: string
): T[] => {
  if (!filter) return items;
  return items.filter(
    (item) => (item[filterBy] as string).toLowerCase() === filter.toLowerCase()
  );
};
