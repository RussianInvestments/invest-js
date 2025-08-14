export function createAsyncIterable<T>(values: T[]): AsyncIterable<T> {
  return {
    [Symbol.asyncIterator]: () => {
      let index = 0;
      return {
        next: () => {
          if (index < values.length) {
            return Promise.resolve({ value: values[index++], done: false });
          } else {
            return Promise.resolve({ value: undefined, done: true });
          }
        },
      };
    },
  };
}
