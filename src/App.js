

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {AppNavigator} from './AppNavigator';
import {Provider} from 'react-redux';
import store from './store/appStore';
export default class App extends Component {
  render() {
    return (
      <Provider store={store}> 
        <AppNavigator />
      </Provider>
    );
  }
}

