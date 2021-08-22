import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { useField } from 'formik';

import TextInput from './TextInput/TextInput.jsx';
import theme from '../../theme.jsx';

const styles = StyleSheet.create({
  errorText: {
    marginTop: 5,
    color: 'red',
    fontSize: 12
  },
  label: {
      justifyContent: 'flex-start',
      color: theme.AppBar.backgroundColor,
      fontSize: 18
  },
  inputStyle: {
    backgroundColor: theme.colors.white,
    color: theme.colors.black,
    borderRadius: 4,
    borderWidth: 1,
    marginTop: 8,
    padding: 8,
    paddingLeft: 12,
    fontFamily: theme.fontStyles.fontFamily
  }
});

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  return (
    <>
      <TextInput
        onChangeText={value => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        style={ styles.inputStyle }
        value={field.value}
        error={showError}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  );
};

export default FormikTextInput;