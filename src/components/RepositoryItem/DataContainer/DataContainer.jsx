import React from 'react';
import { StyleSheet, View, Text, Platform } from 'react-native';
import theme from '../../../theme';

const DataContainer = ({ fullName, description, language }) => {

    const styles = StyleSheet.create({
        dataContainer: {
            display: 'flex',
            flexDirection: 'column' ,
            justifyContent: 'space-around',
            width: '80%'
        },
        fullName: {
            width: '100%',
            fontWeight: '600',
            color: 'black',
            fontSize: 25,
            fontFamily: Platform.select({
                android: 'Roboto',
                ios: 'Arial',
                web: 'System'
            })
        },
        description: {
            width: Platform.select({
                android: 200,
                ios: 200,
                web: '100%'
            }),
            fontWeight: '400',
            flexWrap: 'wrap',
            color: '#6C6C77',
            fontFamily: Platform.select({
                android: 'Roboto',
                ios: 'Arial',
                web: 'System'
            })
        },
        language: {
            color: 'white',
            backgroundColor: '#00abe7',
            padding: 12,
            width: 100,
            fontSize: 15,
            borderRadius: 4,
            fontFamily: theme.fontStyles.fontFamily
        }
        
    });
    return (
        <View style={styles.dataContainer}>
            <Text style={styles.fullName}>{fullName}</Text>
            <Text style={styles.description}>{description}</Text>
            <Text style={styles.language}>{language}</Text>
        </View>
    );
};

export default DataContainer;
