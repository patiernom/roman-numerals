import Joi from 'joi';

const fromRomanInputSchema = Joi.string().uppercase().pattern(/^M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/, 'roman numerals').required();
const toRomanInputSchema = Joi.number().integer().min(1).max(3999).required();

const toRoman = (number) => {
  const { error, value: arabicValue } = toRomanInputSchema.validate(number);

  if (error) {
    throw new Error('Invalid input: You must pass an integer number between 1 and 3999');
  }

  const roman = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 }

  const reducer = (value) => (acc, cur) => {
    while( value >= roman[cur] ) {
      acc += cur;
      value -= roman[cur];
    }

    return acc;
  };

  return Object.keys(roman).reduce(reducer(arabicValue), '');
};

const fromRoman = (roman) => {
  const { error, value: romanValue } = fromRomanInputSchema.validate(roman, { convert: false });

  if (error) {
    throw new Error('Invalid input: You must pass a valid roman numeral ( e.g. I, XC )');
  }

  const values = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000}
  const reducer = (acc, cur, index, array) => acc + ( (array[index + 1] > cur) ? -cur : cur );

  return romanValue.split('').map( d => values[d] ).reduce( reducer, 0 );
};

export {
  toRoman,
  fromRoman,
  fromRomanInputSchema,
  toRomanInputSchema
}
