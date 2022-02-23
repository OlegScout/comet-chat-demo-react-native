import React, {memo} from 'react';
import {Text, View} from 'react-native';
import style from './style';

const ValidationError = (props) => {
  const {error} = props;
  const renderTextView = (text) => <Text style={style.errorTextStyle}>{text}</Text>;
  return (
    <View style={style.rootWrapperStyle}>
      {Array.isArray(error) ? error.map(renderTextView) : renderTextView(error)}
    </View>
  );
};

export default memo(ValidationError);
