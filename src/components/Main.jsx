import React from 'react';
import { StyleSheet, View } from 'react-native';
import RepositoryList from './RepositoryList/RepositoryList';
import { Route, Switch } from 'react-router-native';
import AppBar from './AppBar/AppBar';
import theme from '../theme';
import SignIn from './SignIn/SignIn';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.background,

  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar/>
      <Switch>
        <Route path='/' exact >
          <RepositoryList/>
        </Route>
        <Route path='/login' exact>
            <SignIn />
        </Route>
      </Switch>
    </View>
  );
};

export default Main;