import React, {memo} from 'react';
import {KeyboardAvoidingView, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import style from './style';

const ScreenContainer = (props) => {
  const {safeAreaViewStyle, keyboardAvoidingViewStyle, contentContainerStyle, children} = props;
  return (
    <SafeAreaView style={StyleSheet.compose(style.root, safeAreaViewStyle)}>
      <KeyboardAvoidingView style={StyleSheet.compose(style.root, keyboardAvoidingViewStyle)}>
        <ScrollView
          contentContainerStyle={StyleSheet.compose(style.root, contentContainerStyle)}
          contentInsetAdjustmentBehavior="automatic"
          keyboardShouldPersistTaps="handled">
          {children}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default memo(ScreenContainer);
