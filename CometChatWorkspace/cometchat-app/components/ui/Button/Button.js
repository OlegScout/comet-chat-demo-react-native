import React, {forwardRef} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import style from './style';

const Button = forwardRef((props, ref) => {
  const {style: rootStyle, textStyle, title, ...rest} = props;
  return (
    <TouchableOpacity ref={ref} style={StyleSheet.compose(style.root, rootStyle)} {...rest}>
      <Text style={StyleSheet.compose(style.text, textStyle)}>{title}</Text>
    </TouchableOpacity>
  );
});

export default Button;
