/**
 * Returns a new object with partial update
 */
export const withObjectUpdated = <O>(obj: O, update: Partial<O>) => {
  return { ...((obj as unknown) as object), ...(update as object) };
};

/**
 * Returns a new array with one item updated
 */
export const withItemUpdated = <L, K extends keyof L>(
  list: L[],
  key: K,
  value: L[K],
  update: Partial<L>,
) => {
  return list.map(i => (i[key] === value ? withObjectUpdated(i, update) : i));
};

/**
 * Returns a new array with one item updated
 */
export const withItemUpdatedCallback = <L, K extends keyof L>(
  list: L[],
  key: K,
  value: L[K],
  update: (item: L) => L,
) => {
  return list.map(i => (i[key] === value ? update(i) : i));
};

/**
 * Returns a new array with one item added
 */
export const withItemAdded = <L>(list: L[], item: L) => {
  return [...(list || []), item];
};

/**
 * Returns a new array with one item removed
 */
export const withItemRemoved = <L, K extends keyof L>(
  list: L[],
  key: K,
  value: L[K],
) => {
  return list.filter(i => i[key] !== value);
};

/**
 * Returns a new array with one item removed
 */
export const withSingleItemRemoved = <L>(list: L[], value: L) => {
  return list.filter(i => i !== value);
};
