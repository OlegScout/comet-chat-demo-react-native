import React, {forwardRef} from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import ValidationError from '../ValidationError';
import style from './style';

const initialValues = {
  phone: '',
  name: '',
};

const validationSchema = Yup.object().shape({
  phone: Yup.string()
    .matches(/^\+[1-9]\d{1,14}$/, 'Invalid phone number')
    .required('Phone number is required'),
  name: Yup.string().min(2, 'Name is too short').max(100, 'Name is too long').required('Name is required'),
});

const SignUpForm = forwardRef((props, ref) => {
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
              <Text style={style.titleStyle}>Sign up</Text>
            </View>
            <View style={style.inputWrapperStyle}>
              {renderTextInput('phone', 'Enter your phone number here')}
              {renderTextInput('name', 'Enter your name here')}
            </View>
            <TouchableOpacity style={style.loginBtn} onPress={handleSubmit}>
              <Text style={style.btnText}>Sign up</Text>
            </TouchableOpacity>
          </View>
        );
      }}
    </Formik>
  );
});

export default SignUpForm;
