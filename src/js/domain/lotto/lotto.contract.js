import { compose, map } from "../../utils/fx.js";
import validation from "../../utils/validation.js";

import LOTTO from "./lotto.constant.js";

export const validateNumbers = (numbers) =>
  compose(
    numbers,
    validation.size(LOTTO.COUNT_OF_NUMBERS),
    validation.unique,
    map(validation.integer),
    map(validation.min(LOTTO.MIN_NUMBER)),
    map(validation.max(LOTTO.MAX_NUMBER)),
  );
