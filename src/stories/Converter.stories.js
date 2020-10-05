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

export const oneHundred = Template.bind({});
oneHundred.args = {
  defaultValue: 'C'
};

export const twoThousandAndTwenty = Template.bind({});
twoThousandAndTwenty.args = {
  defaultValue: 'MMXX'
};

export const defaultIsNUmber = Template.bind({});
defaultIsNUmber.args = {
  defaultValue: 10
};

export const withoutLabels = Template.bind({});
withoutLabels.args = {
  defaultValue: 'I',
  showLabel: false,
};

export const romanInvalidNumeral = Template.bind({});
romanInvalidNumeral.args = {
  defaultValue: 'P',
  showLabel: false,
};

export const arabicInvalidNumeral = Template.bind({});
arabicInvalidNumeral.args = {
  defaultValue: 5000,
  showLabel: false,
};