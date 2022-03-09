import React, {memo} from 'react';
import {StyleSheet, View} from 'react-native';
import GsLogo from '../../icons/gsLogo.svg';
import GsBackground from '../../icons/gsBackground.svg';
import style from './style';

const GSBanner = ({style: rootStyle}) => (
  <View style={StyleSheet.compose(style.root, rootStyle)}>
    <GsBackground />
    <GsLogo style={style.logo} />
  </View>
);

export default memo(GSBanner);
