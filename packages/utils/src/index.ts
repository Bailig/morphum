export const group = <TItem>(
  array: TItem[],
  iterator: (item: TItem) => string
): Record<string, TItem[]> => {
  const result: Record<string, TItem[]> = {};
  array.forEach((item) => {
    const key = iterator(item);
    if (result[key]) {
      result[key]!.push(item);
    } else {
      result[key] = [item];
    }
  });
  return result;
};
