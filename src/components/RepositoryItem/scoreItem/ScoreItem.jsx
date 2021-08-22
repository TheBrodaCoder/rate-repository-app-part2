import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ScoreItem = ({ scoreNumber, descriptionText }) => {

    const styles = StyleSheet.create({
        container: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignContent: 'center',
            flexGrow: 0
        },
        score: {
            color: 'black',
            fontWeight: 'bold'
        },
        description: {
            color: '#6C6C77'
        }
    });

    const fixedScoreNumber = ( num ) => {

        const numAbs = Math.abs( num );
    
        if ( numAbs > 999 && numAbs <= 999999) {
            return Math.sign( num )*(( numAbs/1000 ).toFixed( 1 )) + 'K';
        }
    
        if ( numAbs > 999999 ) {
            return Math.sign( num )*(( numAbs/1000000 ).toFixed( 1 )) + 'M';
        }
    
        return Math.sign( num )*numAbs;
    };

    return (
        <View style={styles.container}>
            <Text style={styles.score}>{ fixedScoreNumber(scoreNumber) }</Text>
            <Text style={styles.description} >{ descriptionText }</Text>
        </View>
    );
};

export default ScoreItem;
