import React, { Component } from 'react'
import { TextInput } from 'react-native'

import { colors, globalStyles } from './Theme';

export class AppTextInput extends Component {
  render() {
    const { style, ...passProps } = this.props;
    return (
      <TextInput
      style={{...globalStyles.textInput, ...style}}
      placeholder="input"
      underlineColorAndroid={colors.secondary}
      {...passProps} />
    )
  }
}
