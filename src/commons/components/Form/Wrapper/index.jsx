import React from 'react';
import { WrapInput } from 'react-reform';
import isArray from 'lodash/isArray';
import map from 'lodash/map';
import Input from '../../Input';
import Select from '../../Select';
import Checkbox from '../../Checkbox';
import Textarea from '../../Textarea';
import Date from '../../Date';

const selectOnChange = (selects) => {
  if (isArray(selects)) {
    return map(selects, selected => selected.value);
  }
  return selects.value;
};

const textInputWrapper = props => (
  <WrapInput
    {...props}
    directProps={props}
    focusFn={() => {
  }}
  >
    {({ value, themeProps: { onChange, ...restThemeProps } }) => {
      const props = {
        ...restThemeProps,
        value: value === null ? restThemeProps.value : value,
      };

      return (
        <Input
          {...props}
          onChange={e => onChange(e.target.value)}
        />
      );
    }}
  </WrapInput>
);

const selectInputWrapper = props => (
  <WrapInput
    {...props}
    directProps={props}
    focusFn={() => {
  }}
  >
    {({ value, themeProps: { onChange, ...restThemeProps } }) => {
      const props = {
        ...restThemeProps,
        value: value === null ? restThemeProps.value : value,
      };

      return (
        <Select
          {...props}
          onChange={selects => onChange(selectOnChange(selects))}
        />
      );
    }}
  </WrapInput>
);

const checkboxInputWrapper = props => (
  <WrapInput
    {...props}
    directProps={props}
    focusFn={() => {
  }}
  >
    {({ value, themeProps: { onChange, ...restThemeProps } }) => {
      const props = {
        ...restThemeProps,
        value: value === null ? restThemeProps.checked : value,
      };

      return (
        <Checkbox
          {...props}
          onChange={checked => onChange(checked)}
        />
      );
    }}
  </WrapInput>
);

const textareaInputWrapper = props => (
  <WrapInput
    {...props}
    directProps={props}
    focusFn={() => {
  }}
  >
    {({ value, themeProps: { onChange, ...restThemeProps } }) => {
      const props = {
        ...restThemeProps,
        value: value === null ? restThemeProps.checked : value,
      };

      return (
        <Textarea
          {...props}
          onChange={e => onChange(e.target.value)}
        />
      );
    }}
  </WrapInput>
);

const dateInputWrapper = props => (
  <WrapInput
    {...props}
    directProps={props}
    focusFn={() => {
  }}
  >
    {({ value, themeProps: { onChange, ...restThemeProps } }) => {
      const props = {
        ...restThemeProps,
        value: value === null ?
          restThemeProps.value || restThemeProps.defaultValue :
          value,
      };

      return (
        <Date
          {...props}
          onChange={(value, formattedValue) => onChange(value)}
        />
      );
    }}
  </WrapInput>
);

export default {
  Text: textInputWrapper,
  Select: selectInputWrapper,
  Checkbox: checkboxInputWrapper,
  Textarea: textareaInputWrapper,
  Date: dateInputWrapper,
};
