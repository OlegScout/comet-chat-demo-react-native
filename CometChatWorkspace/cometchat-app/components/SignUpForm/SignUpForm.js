import React, {forwardRef} from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {View} from 'react-native';
import TextField from '../ui/TextField';
import Button from '../ui/Button';
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
            <TextField
              style={style.spacing}
              error={error}
              placeholder={placeholder}
              value={values[name]}
              onBlur={handleBlur(name)}
              onChangeText={handleChange(name)}
            />
          );
        };

        return (
          <View>
            {renderTextInput('phone', 'Enter your phone number here')}
            {renderTextInput('name', 'Enter your name here')}
            <Button title="Sign up" onPress={handleSubmit} />
          </View>
        );
      }}
    </Formik>
  );
});

export default SignUpForm;
