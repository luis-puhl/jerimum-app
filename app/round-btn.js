import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TouchableOpacity } from 'react-native';

export class RoundBtn extends React.Component {
  style;
  fontSize;
  size;
  constructor(props) {
    super(props);

    function getNumber(value, def) {
      if (value === undefined || value === null) {
        return def;
      }
      if (typeof value == 'number') {
        return value;
      }
      if (typeof value == 'string') {
        try {
          return Number.parseInt(value);
        } catch (error) {
          return def;
        }
      }
      return 0 + value;
    }

    this.size = getNumber(props.size, 100);
    this.fontSize = getNumber(props.style.fontSize, 20);
    this.paddingTop = (this.size - this.fontSize) /2 - this.fontSize/4;
    this.style = StyleSheet.create({
      RoundStuff: {
        paddingTop: this.paddingTop,
        width: this.size,
        height: this.size,
        borderRadius: this.size/2,
        backgroundColor: props.style.backgroundColor || '#00BCD4',
      },
      TextStyle:{
        color: props.style.color || '#fff',
        textAlign: 'center',
        fontSize: this.fontSize,
        fontWeight: props.style.fontWeight || 'bold'
      },
    });
  }
  render() {
    return (
      <TouchableOpacity
        style={this.style.RoundStuff}
        activeOpacity={ .5 }
        onPress={this.props.onPress}
      >
        <Text style={this.style.TextStyle}>{this.props.title || 'tap-me'}</Text>
      </TouchableOpacity>
    );
  }
}
