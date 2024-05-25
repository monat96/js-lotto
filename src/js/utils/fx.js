export const curry = (fn) => {
  const curried = (...args) => {
    if (args.length >= fn.length) {
      return fn(...args);
    }

    return (...rest) => curried(...args, ...rest);
  };

  return curried;
};

export const compose = (initialValue, ...fns) =>
  fns.reduce((acc, fn) => fn(acc), initialValue);

export const pipe =
  (...fns) =>
  (initialValue) =>
    compose(initialValue, ...fns);

export const map = curry((fn, iter) => {
  return Array.from(iter, fn);
});
