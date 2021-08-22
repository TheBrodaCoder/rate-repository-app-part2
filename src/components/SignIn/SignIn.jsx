import { Formik } from 'formik';
import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import * as yup from 'yup';

import FormikTextInput from '../FormikTextInput/FormikTextInput';
import theme from '../../theme';

const styles = StyleSheet.create({
    mainContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 30
    },
    formContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '80%',
        borderRadius: 4,
        backgroundColor: theme.colors.white,
        padding: 20
    },
    buttonStyle: {
        backgroundColor: theme.colors.blue,
        width: '60%',
        alignSelf: 'center',
        padding: 5,
        borderRadius: 4,
        marginTop: 8,
        paddingTop: 15,
        paddingBottom: 15
    },
    insideButton: {
        alignSelf: 'center',
        fontFamily: theme.fontStyles.fontFamily,
        color: theme.colors.white
    }
});

const validationSchema = yup.object().shape({
    username: yup.string().min(4, 'Username must be greater or equal to 4 characters').required('Username is required'),
    password: yup.string().min(8, 'Password must have 8 or more characters').required('Password is require')
});

const SignIn = () => {

    return (
        <View style={ styles.mainContainer }>
            <Formik
                initialValues={{
                    username: '',
                    password: ''
                }}
                onSubmit={
                    ( values ) => console.log( values )
                }
                validationSchema= { validationSchema }
            >
                {({ handleChange, handleSubmit, values }) => {
                    
                    return (
                        <View style={ styles.formContainer }>
                               
                            <FormikTextInput
                                 name={ 'username' }
                                onChangeText={ handleChange('username') }
                                value={ values.username }
                                placeholder= 'Username'
                            />
                                
                            <FormikTextInput
                                name={ 'password' }
                                onChangeText={ handleChange('password') }
                                secureTextEntry
                                value={ values.password }
                                placeholder= 'Password'
                            />

                            <TouchableHighlight
                                onPress={ handleSubmit }
                                style={ styles.buttonStyle }
                            >
                                <Text style={ styles.insideButton }>Log in!</Text>
                            </TouchableHighlight> 
                        </View>
                        );
                }}

            </Formik>    
            
        </View>
    );
};

export default SignIn;
