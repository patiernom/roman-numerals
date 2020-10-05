import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { pathOr } from 'ramda';

import { toRoman, fromRoman } from '../../helpers/romanNumerals';
import inputPropTypeValidation from '../../helpers/inputPropTypeValidation';

import ConverterInput from './ConverterInput';

const Index = ({defaultValue, showLabel, romanInputLabel, arabicInputLabel}) => {
  const [romanValidationError, setRomanValidationError] = useState(null);
  const [arabicValidationError, setArabicValidationError] = useState(null);
  const [romanValue, setRomanValue] = useState(null);
  const [arabicValue, setArabicValue] = useState(null);
  const [prevDefaultValue, setPrevDefaultValue] = useState(null);

  const convertFromRoman = (value) => {
    setRomanValidationError(null);
    setArabicValidationError(null);
    try {
      return fromRoman(value)
    } catch (error) {
      setRomanValidationError(error.message);
      return undefined;
    }
  }

  const convertFromArabic = (value) => {
    setArabicValidationError(null);
    setRomanValidationError(null);
    try {
      return toRoman(value);
    } catch (error) {
      setArabicValidationError(error.message);
      return '';
    }
  }

  if (defaultValue !== prevDefaultValue) {
    if (isNaN(Number(defaultValue))) {
      setRomanValue(defaultValue);
      setArabicValue(convertFromRoman(defaultValue));
      setPrevDefaultValue(defaultValue);
    } else {
      setArabicValue(defaultValue);
      setRomanValue(convertFromArabic(defaultValue));
      setPrevDefaultValue(defaultValue);
    }
  }

  const handleOnChangeRoman = (event) => {
    const value = pathOr('', ['target', 'value'], event);

    setRomanValue(value)
    setArabicValue(convertFromRoman(value));
  };

  const handleOnChangeArabic = (event) => {
    const value = pathOr('', ['target', 'value'], event);

    setArabicValue(value);
    setRomanValue(convertFromArabic(value));
  }

  return (
    <ConverterInput
      showLabel={showLabel}
      romanInputLabel={romanInputLabel}
      arabicInputLabel={arabicInputLabel}
      romanValidationError={romanValidationError}
      arabicValidationError={arabicValidationError}
      romanValue={romanValue}
      arabicValue={arabicValue}
      handleOnChangeArabic={handleOnChangeArabic}
      handleOnChangeRoman={handleOnChangeRoman}
    />
  );
};

Index.propTypes = {
  /** defaultValue: default roman numerals to show **/
  defaultValue: inputPropTypeValidation,
  /** romanInputLabel: default label to show for the roman numerals input **/
  romanInputLabel: PropTypes.string,
  /** arabicInputLabel: default label to show for the arabic number input **/
  arabicInputLabel: PropTypes.string,
  /** showLabel: if true the label of the TextField is showed by default set to true **/
  showLabel: PropTypes.bool
};

Index.defaultProps = {
  romanInputLabel: 'Roman numeral',
  arabicInputLabel: 'Arabic number (integer)',
  showLabel: true,
};

export default Index;