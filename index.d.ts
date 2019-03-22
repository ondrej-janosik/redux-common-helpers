/**
 * Returns a new object with partial update
 */
export declare const withObjectUpdated: <O>(obj: O, update: Partial<O>) => O & Partial<O>;
/**
 * Returns a new array with one item updated
 */
export declare const withItemUpdated: <L, K extends keyof L>(list: L[], key: K, value: L[K], update: Partial<L>) => L[];
/**
 * Returns a new array with one item updated
 */
export declare const withItemUpdatedCallback: <L, K extends keyof L>(list: L[], key: K, value: L[K], update: (item: L) => L) => L[];
/**
 * Returns a new array with one item added
 */
export declare const withItemAdded: <L>(list: L[], item: L) => L[];
/**
 * Returns a new array with one item removed
 */
export declare const withItemRemoved: <L, K extends keyof L>(list: L[], key: K, value: L[K]) => L[];
/**
 * Returns a new array with one item removed
 */
export declare const withSingleItemRemoved: <L>(list: L[], value: L) => L[];
