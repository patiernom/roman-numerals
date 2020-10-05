import React from 'react';
import Converter from '../components/Converter';

export default {
  title: 'Roman numerals Converter',
  component: Converter,
};

const Template = (args) => <Converter {...args} />;

export const Empty = Template.bind({});
Empty.args = {};

export const One = Template.bind({});
One.args = {
  defaultValue: 'I'
};

export const OneHundred = Template.bind({});
OneHundred.args = {
  defaultValue: 'C'
};

export const TwoThousandAndTwenty = Template.bind({});
TwoThousandAndTwenty.args = {
  defaultValue: 'MMXX'
};

export const DefaultIsANumber = Template.bind({});
DefaultIsANumber.args = {
  defaultValue: 10
};

export const WithoutLabels = Template.bind({});
WithoutLabels.args = {
  defaultValue: 'I',
  showLabel: false,
};

export const RomanInvalidNumeral = Template.bind({});
RomanInvalidNumeral.args = {
  defaultValue: 'P',
  showLabel: false,
};

export const ArabicInvalidNumber = Template.bind({});
ArabicInvalidNumber.args = {
  defaultValue: 5000,
  showLabel: false,
};
