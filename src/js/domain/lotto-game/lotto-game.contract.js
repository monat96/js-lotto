import { curry, compose } from "../../utils/fx.js";
import validation from "../../utils/validation.js";
import LOTTO from "../lotto/lotto.constant.js";

import { LOTTO_GAME_RANK } from "./lotto-game.constant.js";

export const validateBonusNumber = curry((winningNumbers, bonusNumber) =>
  compose(
    bonusNumber,
    validation.integer,
    validation.min(LOTTO.MIN_NUMBER),
    validation.max(LOTTO.MAX_NUMBER),
    validation.notIncluded(winningNumbers),
  ),
);

export const validateRank = (rank) =>
  compose(
    rank,
    validation.integer,
    validation.included(Object.values(LOTTO_GAME_RANK)),
  );
