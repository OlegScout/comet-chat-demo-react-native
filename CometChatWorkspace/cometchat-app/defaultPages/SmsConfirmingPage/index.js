import React, {memo, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Alert} from 'react-native';

import {getErrorMessage, getValidationErrors} from '../../api/utils';
import {FINITE_STATES} from '../../store/constants';
import {SignUpActions} from '../../store/actions';
import {AuthSelectors, SignUpSelectors} from '../../store/selectors';
import FormView from '../../components/FormView';
import SmsConfirmForm from '../../components/SmsConfirmingForm';

const SmsConfirmingPage = (props) => {
  const {navigation} = props;
  const dispatch = useDispatch();
  const authStatus = useSelector(AuthSelectors.selectStatus);
  const authError = useSelector(AuthSelectors.selectError);
  const smsConfirmingStatus = useSelector(SignUpSelectors.selectSmsConfirmStatus);
  const smsConfirmingError = useSelector(SignUpSelectors.selectSmsConfirmError);
  const signUpOpt = useSelector(SignUpSelectors.selectSignUpOtp);

  const error = authError || smsConfirmingError;
  const loading = authStatus === FINITE_STATES.LOADING || smsConfirmingStatus === FINITE_STATES.LOADING;

  const handleSmsConfirm = (values) => {
    dispatch(SignUpActions.smsConfirm(values));
  };

  useEffect(() => {
    if (signUpOpt) {
      Alert.alert('Please, enter this code', signUpOpt, [{text: 'OK'}]);
    }
  }, [signUpOpt]);

  useEffect(() => {
    const listener = (e) => {
      if (loading) {
        e.preventDefault();
      } else {
        dispatch(SignUpActions.signUpReset());
      }
    };

    navigation.addListener('beforeRemove', listener);
    return () => {
      navigation.removeListener('beforeRemove', listener);
    };
  }, [dispatch, navigation, loading]);

  useEffect(() => {
    return () => {
      dispatch(SignUpActions.smsConfirmReset());
    };
  }, [dispatch]);

  return (
    <FormView loading={loading} errorMessage={getErrorMessage(error)}>
      <SmsConfirmForm validationErrors={getValidationErrors(error)} onSubmit={handleSmsConfirm} />
    </FormView>
  );
};

export default memo(SmsConfirmingPage);
