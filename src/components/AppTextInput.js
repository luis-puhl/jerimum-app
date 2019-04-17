import React from 'react'
import { TextInput } from 'react-native'

import { colors, globalStyles } from './Theme';

export const AppTextInput = React.forwardRef((props, ref) => {
  const { style, ...passProps } = props;
  return (
    <TextInput
    style={{...globalStyles.textInput, ...style}}
    placeholder="input"
    underlineColorAndroid={colors.secondary}
    ref={ref}
    {...passProps} />
  )
},);
