import React from 'react';
import PropTypes from 'prop-types';
import { isNil } from 'ramda';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& input': {
      fontSize: '32px'
    },
  },
}));

const ConverterInput = ({ showLabel, romanInputLabel, arabicInputLabel, romanValidationError, romanValue, arabicValue, arabicValidationError, handleOnChangeArabic, handleOnChangeRoman }) => {
  const getLabel = (label) => showLabel ? label : null;
  const getPlaceholder = (label) => !showLabel ? label : null;
  const isError = (error) => !isNil(error);
  const getErrorMessage = (error) => isError(error) ? error : null;

  const classes = useStyles();

  return (
    <React.Fragment>
      <div>
        <TextField
          id="roman-numeral"
          classes={classes}
          required
          fullWidth
          error={isError(romanValidationError)}
          helperText={getErrorMessage(romanValidationError)}
          label={getLabel(romanInputLabel)}
          onChange={handleOnChangeRoman}
          value={romanValue}
          placeholder={getPlaceholder(romanInputLabel)}
        />
      </div>
      <br/>
      <div>
        <TextField
          id="arabic-numeral"
          required
          fullWidth
          classes={classes}
          error={isError(arabicValidationError)}
          helperText={getErrorMessage(arabicValidationError)}
          label={getLabel(arabicInputLabel)}
          onChange={handleOnChangeArabic}
          value={arabicValue}
          placeholder={getPlaceholder(arabicInputLabel)}
        />
      </div>
    </React.Fragment>
  );
};

ConverterInput.propTypes = {
  romanInputLabel: PropTypes.string,
  arabicInputLabel: PropTypes.string,
  romanValidationError: PropTypes.string,
  arabicValidationError: PropTypes.string,
  romanValue: PropTypes.string,
  arabicValue: PropTypes.string,
  handleOnChangeRoman: PropTypes.func,
  handleOnChangeArabic: PropTypes.func,
  showLabel: PropTypes.bool
};

ConverterInput.defaultProps = {};

export default ConverterInput;