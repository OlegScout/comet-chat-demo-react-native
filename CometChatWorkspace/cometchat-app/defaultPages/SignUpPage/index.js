import React, {memo, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {getErrorMessage, getValidationErrors} from '../../api/utils';
import {FINITE_STATES} from '../../store/constants';
import {AuthActions, SignUpActions} from '../../store/actions';
import {AuthSelectors, SignUpSelectors} from '../../store/selectors';
import SignUpScreenContainer from '../../components/SignUpScreenContainer';
import FullScreenLoader from '../../components/FullScreenLoader';
import DropDownAlert from '../../components/DropDownAlert';
import SignUpForm from '../../components/SignUpForm';

const SignUpPage = (props) => {
  const {navigation} = props;
  const dispatch = useDispatch();
  const authStatus = useSelector(AuthSelectors.selectStatus);
  const authError = useSelector(AuthSelectors.selectError);
  const signUpStatus = useSelector(SignUpSelectors.selectSignUpStatus);
  const signUpError = useSelector(SignUpSelectors.selectSignUpError);

  const error = authError || signUpError;
  const loading = authStatus === FINITE_STATES.LOADING || signUpStatus === FINITE_STATES.LOADING;

  const handleSignUp = (values) => {
    dispatch(SignUpActions.signUp(values));
  };

  useEffect(() => {
    dispatch(AuthActions.authCheckState());
  }, [dispatch]);

  useEffect(() => {
    if (signUpStatus === FINITE_STATES.SUCCESS) {
      navigation.navigate('SmsConfirmingPage');
    }
  }, [navigation, signUpStatus]);

  useEffect(() => {
    return () => {
      dispatch(SignUpActions.signUpReset());
    };
  }, [dispatch]);

  return (
    <>
      <FullScreenLoader loading={loading} />
      <DropDownAlert type="error" message={getErrorMessage(error)} />
      <SignUpScreenContainer>
        <SignUpForm validationErrors={getValidationErrors(error)} onSubmit={handleSignUp} />
      </SignUpScreenContainer>
    </>
  );
};

export default memo(SignUpPage);
