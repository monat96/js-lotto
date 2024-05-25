import { compose } from "../../utils/fx.js";
import validation from "../../utils/validation.js";

export const validateAmountPaid = (amountPaid) =>
  compose(amountPaid, validation.integer, validation.min(0));
