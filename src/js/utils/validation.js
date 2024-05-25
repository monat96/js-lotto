import { curry } from "./fx.js";

const validation = {
  number: curry((value) => {
    if (typeof value !== "number" || !isNaN(value)) {
      throw new TypeError("숫자를 입력해주세요.");
    }

    return value;
  }),

  integer: curry((value) => {
    if (!Number.isInteger(value)) {
      throw new TypeError("정수를 입력해주세요.");
    }

    return value;
  }),

  min: curry((min, value) => {
    if (value < min) {
      throw new RangeError(`${min} 이상의 값을 입력해주세요.`);
    }

    return value;
  }),

  max: curry((max, value) => {
    if (value > max) {
      throw new RangeError(`${max} 이하의 값을 입력해주세요.`);
    }

    return value;
  }),

  unique: curry((array) => {
    if (new Set(array).size !== array.length) {
      throw new RangeError("중복되지 않은 값을 입력해주세요.");
    }
    return array;
  }),

  size: curry((size, array) => {
    if (array.length !== size) {
      throw new RangeError(`${size}개의 값을 입력해주세요.`);
    }

    return array;
  }),

  notIncluded: curry((array, value) => {
    if (array.includes(value)) {
      throw new RangeError("포함되지 않은 값을 입력해주세요.");
    }

    return value;
  }),

  included: curry((array, value) => {
    if (!array.includes(value)) {
      throw new RangeError("포함된 값을 입력해주세요.");
    }

    return value;
  }),
};

export default validation;
