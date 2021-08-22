import React from 'react';
import { TouchableWithoutFeedback, Text, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';
import theme from '../../../theme';

const AppBarTab = ({ onPress, tabText, path }) => {

    const styles = StyleSheet.create({
        text: {
            fontSize: theme.AppBar.fontSize,
            color: theme.AppBar.color,
            fontWeight: theme.AppBar.fontWeight,
            justifyContent: 'center',
            alignContent: 'center',
            margin: 10
        }
        // ...
      });

    return (
        <TouchableWithoutFeedback
            onPress={onPress || null}
        >
            <Link to={ path }>
                <Text style={styles.text}>
                    { tabText }
                </Text>
            </Link>
            
        </TouchableWithoutFeedback>        
    );
};

export default AppBarTab;
