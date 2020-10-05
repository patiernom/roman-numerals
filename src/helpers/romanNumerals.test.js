import assertModule from 'assert';

import { toRoman, fromRoman } from './romanNumerals';

const assert = assertModule.strict || assertModule;

describe('Roman Numerals', () => {
  describe('From Roman numerals to integer', () => {
    it('it should trigger an error if the value is undefined',() => {
      assert.throws(() => fromRoman(), Error);
    });

    it('it should trigger an error if the value is not a string',() => {
      assert.throws(() => fromRoman(10), Error);
    });

    it('it should trigger an error if the value is lowercase',() => {
      assert.throws(() => fromRoman("i"), Error);
    });

    it('it should trigger an error if the value is a roman numerals',() => {
      assert.throws(() => fromRoman("H"), Error);
      assert.throws(() => fromRoman("IVH"), Error);
    });
    
    it('it should trigger an error if the value is bigger than 3999 (MMMM)',() => {
      assert.throws(() => fromRoman("MMMM"), Error);
    });

    it('I should be 1',() => {
      const result = fromRoman('I');
      assert.strictEqual(result, 1);
    });

    it('XC should be 90',() => {
      const result = fromRoman('XC');
      assert.strictEqual(result, 90);
    });

    it('MMXVIII should be 2018',() => {
      const result = fromRoman('MMXVIII');
      assert.strictEqual(result, 2018);
    });
  });

  describe('From Integer to Roman numerals', () => {
    it('it should trigger an error if the value is undefined',() => {
      assert.throws(() => toRoman(), Error);
    });

    it('it should trigger an error if the value is not an integer',() => {
      assert.throws(() => toRoman(25.67), Error);
    });

    it('it should trigger an error if the value is below one',() => {
      assert.throws(() => toRoman(0), Error);
    });

    it('it should trigger an error when the string number is a not valid integer',() => {
      assert.throws(() => toRoman("1.4"), Error);
    });

    it('it should trigger an error when number is bigger than 3999',() => {
      assert.throws(() => toRoman(6000), Error);
    });

    it('a string number is validate but converted',() => {
      const result = toRoman("10");
      assert.strictEqual(result, "X");
    });

    it('1 should be I',() => {
      const result = toRoman(1);
      assert.strictEqual(result, "I");
    });

    it('90 should be XC',() => {
      const result = toRoman(90);
      assert.strictEqual(result, "XC");
    });

    it('2018 should be MMXVIII',() => {
      const result = toRoman(2018);
      assert.strictEqual(result, "MMXVIII");
    });
  })
});
