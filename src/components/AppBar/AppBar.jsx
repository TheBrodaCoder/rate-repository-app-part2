import React from 'react';
import { View, StyleSheet, Platform, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import theme from '../../theme';
import AppBarTab from './AppBarTab/AppBarTab';

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'web' ? Constants.statusBarHeight : Constants.statusBarHeight + 10,
    height: Platform.OS === 'web' ? 50 : 80,
    backgroundColor: theme.AppBar.backgroundColor,
    display: 'flex',
    flexDirection: 'row',
    fontFamily: Platform.select({
      android: 'Roboto',
      ios: 'Arial',
      web: 'System'
  })
    // ...
  }
  // ...
});

const AppBar = () => {
  return (
        <View style={styles.container}>
          <ScrollView horizontal>
            <AppBarTab tabText='Repositories' path='/'/>
            <AppBarTab tabText='Log in' path='/login'/>
          </ScrollView>
        </View>
        );
};

export default AppBar;