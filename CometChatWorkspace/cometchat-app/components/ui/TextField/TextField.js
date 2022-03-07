import React, {memo} from 'react';
import {TextInput, View} from 'react-native';
import ValidationError from './ValidationError';
import style from './style';

const TextField = (props) => {
  const {error, style: rootStyle, ...rest} = props;
  return (
    <View style={rootStyle}>
      <TextInput style={style.textInput} {...rest} />
      {error && <ValidationError error={error} />}
    </View>
  );
};

export default memo(TextField);
