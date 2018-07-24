import * as React from 'react'
import {  StyleSheet, View } from 'react-native';
import {LogInScreen} from './screens/login/loginScreen';
export interface Props { }
export interface State { }

export class App extends React.Component<Props, State> {
  render() {
    return (
      <View style={styles.container}>
       <LogInScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});