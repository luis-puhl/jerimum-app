import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { TouchableOpacity, Text } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { colors, globalStyles, roundStyle } from './Theme';

export function mkAppRoundBtn(WrappedComponent) {
  return class AppRoundBtn extends Component {
    render() {
      const { style, size, onPress, ...passThroughProps } = this.props;
      const { backgroundColor, ...innerStyle } = {backgroundColor: colors.primary, ...style};
      const containerProps = {
        onPress,
        style: {...roundStyle(size), backgroundColor},
        activeOpacity: .5,
      };
      const innerProps = {
        size,
        ...passThroughProps,
        style: {...globalStyles.roundBtnText, ...innerStyle},
      };
      console.log({containerProps, innerProps})
      return (
        <TouchableOpacity {...containerProps}>
          <WrappedComponent {...innerProps} />
        </TouchableOpacity>
      )
    }
  }
}

export const AppRoundBtn = {
  Text: mkAppRoundBtn(Text),
  MaterialCommunityIcons: mkAppRoundBtn(MaterialCommunityIcons),
};
