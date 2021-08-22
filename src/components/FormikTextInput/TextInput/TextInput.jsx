import React from 'react';
import {  TextInput as NativeTextInput } from 'react-native';

// eslint-disable-next-line no-unused-vars


const TextInput = ({ style, error, ...props }) => {

    
    const textInputStyle = [ style, { borderColor: error ? '#d73a4a' : '#24292E' } ];

    return <NativeTextInput style= { textInputStyle } {...props} />;
};

export default TextInput;