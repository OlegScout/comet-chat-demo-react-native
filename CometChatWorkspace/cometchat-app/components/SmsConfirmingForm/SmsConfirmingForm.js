import React, {forwardRef} from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {View} from 'react-native';
import TextField from '../ui/TextField';
import Button from '../ui/Button';
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
            {renderTextInput('otp', 'Enter code here')}
            <Button title="Confirm" onPress={handleSubmit} />
          </View>
        );
      }}
    </Formik>
  );
});

export default SmsConfirmingForm;
