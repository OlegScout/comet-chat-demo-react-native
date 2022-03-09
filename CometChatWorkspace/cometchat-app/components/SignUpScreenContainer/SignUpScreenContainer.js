import React from 'react';
import {Text, View} from 'react-native';
import ScreenContainer from '../ScreenContainer';
import GSBanner from '../GSBanner';
import style from './style';

const SignUpScreenContainer = (props) => {
  const {children} = props;
  return (
    <ScreenContainer safeAreaViewStyle={style.safeAreaView} contentContainerStyle={style.contentContainer}>
      <View>
        <Text style={style.title}>{'Sign up for'}</Text>
        <Text style={[style.title, style.bold, style.spacing]}>{'My Account'}</Text>
        <Text style={[style.label, style.spacing]}>{'Please sign up to access all\nGoSourse features'}</Text>
        {children}
      </View>
      <GSBanner />
    </ScreenContainer>
  );
};

export default SignUpScreenContainer;
