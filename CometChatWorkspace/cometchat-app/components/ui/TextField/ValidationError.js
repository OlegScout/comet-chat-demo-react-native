import React from 'react';
import {Text, View} from 'react-native';
import style from './style';

const ValidationError = (props) => {
  const {error} = props;
  const renderTextView = (text) => <Text style={style.validationErrorText}>{text}</Text>;
  return (
    <View style={style.validationError}>
      {Array.isArray(error) ? error.map(renderTextView) : renderTextView(error)}
    </View>
  );
};

export default ValidationError;
