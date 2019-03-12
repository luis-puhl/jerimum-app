import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TouchableOpacity } from 'react-native';

export class RoundBtn extends React.Component {
  style;
  constructor(props) {
    super(props);
    if (typeof props.size === 'string') {
      try {
        this.size = Number.parseInt(props.size);
      } catch (error) {
        this.size = 100;
      }
    } else {
      this.size = 0 + props.size;
    }
    this.style = StyleSheet.create({
      RoundStuff: {
        paddingTop: this.size/2 - ((props.style.fontSize / 2) || 10),
        width: this.size,
        height: this.size,
        borderRadius: this.size/2,
        backgroundColor: props.style.backgroundColor || '#00BCD4',
      },
      TextStyle:{
        color: props.style.color || '#fff',
        textAlign: 'center',
        fontSize: props.style.fontSize || 20,
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
