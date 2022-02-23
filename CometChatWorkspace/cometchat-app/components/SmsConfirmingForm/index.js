import React, {forwardRef} from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import ValidationError from '../ValidationError';
import style from './style';

const initialValues = {
  otp: '',
};

const validationSchema = Yup.object().shape({
  otp: Yup.string()
    .matches(/^\d{4}$/, 'Invalid code')
    .required('Phone number is required'),
});

const SmsConfirmingForm = forwardRef((props, ref) => {
  const {validationErrors, onSubmit} = props;
  return (
    <Formik innerRef={ref} initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {({handleChange, handleBlur, handleSubmit, values, errors, touched}) => {
        const renderTextInput = (name, placeholder) => {
          const error = validationErrors?.[name] || (touched[name] && errors[name]);
          return (
            <>
              <TextInput
                style={style.textInput}
                placeholder={placeholder}
                value={values[name]}
                onBlur={handleBlur(name)}
                onChangeText={handleChange(name)}
              />
              {error && <ValidationError error={error} />}
            </>
          );
        };

        return (
          <View style={style.rootWrapperStyle}>
            <View>
              <Text style={style.titleStyle}>Sms confirming</Text>
            </View>
            <View style={style.inputWrapperStyle}>{renderTextInput('otp', 'Enter code here')}</View>
            <TouchableOpacity style={style.loginBtn} onPress={handleSubmit}>
              <Text style={style.btnText}>Confirm</Text>
            </TouchableOpacity>
          </View>
        );
      }}
    </Formik>
  );
});

export default SmsConfirmingForm;
