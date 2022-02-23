import React, {memo, useEffect, useRef, useState} from 'react';
import style from './style';
import {ActivityIndicator, KeyboardAvoidingView, ScrollView, Text, View} from 'react-native';

import DropDownAlert from '../../cometchat-pro-react-native-ui-kit/src/components/Shared/DropDownAlert';
import {SafeAreaView} from 'react-native-safe-area-context';

const FormView = (props) => {
  const {loading, errorMessage, children} = props;
  const [showError, setShowError] = useState(false);
  const dropDownAlertRef = useRef();

  const handleErrorClose = () => {
    setShowError(false);
  };

  useEffect(() => {
    if (errorMessage) {
      setShowError(true);
    }
  }, [errorMessage]);

  useEffect(() => {
    if (errorMessage && showError && dropDownAlertRef.current) {
      dropDownAlertRef.current.showMessage('error', errorMessage);
    }
  }, [errorMessage, showError]);

  return (
    <SafeAreaView style={style.rootWrapperStyle}>
      <KeyboardAvoidingView style={style.rootWrapperStyle}>
        {loading && (
          <View style={style.loaderWrapper}>
            <ActivityIndicator size="large" color="white" />
          </View>
        )}
        <ScrollView>
          <View style={style.contentWrapperStyle}>
            <Text style={style.titleStyle}>GoSource</Text>
            {children}
          </View>
          <DropDownAlert ref={dropDownAlertRef} onClose={handleErrorClose} />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default memo(FormView);
