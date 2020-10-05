import { isEmpty, isNil } from "ramda";
import { fromRomanInputSchema, toRomanInputSchema } from "./romanNumerals";

export default function validDefaultValue(props, propName, componentName) {
  if (!isNil(props[propName]) && !isEmpty(props[propName])) {
    let myError;

    if (!isNaN(Number(props[propName]))) {
      const { error } = toRomanInputSchema.validate(props[propName]);
      myError = error;
    } else {
      const { error } = fromRomanInputSchema.validate(props[propName], { convert: false });
      myError = error;
    }

    if (myError) {
      return new Error(`Invalid prop ${propName} supplied to ${componentName}. Validation failed: ${myError}`);
    }
  }
};