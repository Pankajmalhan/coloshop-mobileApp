import * as React from 'react'
import {  StyleSheet, Text, View } from 'react-native';
export interface Props { }
export interface State { }

export class LogInScreen extends React.Component<Props, State> {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is TYpeScript App</Text>
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