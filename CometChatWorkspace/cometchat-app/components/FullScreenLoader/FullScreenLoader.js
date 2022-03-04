import React, {memo} from 'react';
import {ActivityIndicator, View} from 'react-native';
import style from './style';

const FullScreenLoader = ({loading}) => {
  return (
    loading && (
      <View style={style.root}>
        <ActivityIndicator size="large" color="white" />
      </View>
    )
  );
};

export default memo(FullScreenLoader);
