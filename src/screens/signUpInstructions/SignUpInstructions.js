

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar, AccessibilityInfo,Image} from 'react-native';
import {Button} from 'native-base';
import HeaderComponent from '../../components/header/header';
export default class SignUpInstructions extends Component {

  moveToBack=()=>{
    this.props.navigation.goBack();
  }
  render() {
    return (
      <View style={styles.container}>
      <HeaderComponent leftHeader={ {
        imageUrl:require('../../assets/images/leftArrow.png'),
        onPress:this.moveToBack
      }}></HeaderComponent>
        <View style={{flex:0.3,flexDirection: 'column',justifyContent:'center',alignItems: 'center'}}>
          <Image style={{width: 90, height: 90, shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.8,
              shadowRadius: 2,   }}  source={require('../../assets/images/instructions.png')}/>
        </View>
        <View style={{flex:0.3,width:'90%',marginLeft: '5%',marginRight: '5%',}}>
          <Text>Let's get started by creating your account login.
             you'll choose a username and password, which we'll use to encrypt your account. 
             Not even Colo Shop has access to your information, 
             so you have full and complete control over yuor digital assets.</Text>
        </View>
        <View style={{flex:0.4,flexDirection: 'column',}}>
              <Text>Let's get started with choosing a username</Text>
              <Button block style={{marginTop: 30,backgroundColor:'#0e3c87'}} onPress={()=>{this.props.navigation.navigate('SignUpScreen')}}>
            <Text style={{color:'#fff',fontSize:18}}>Get Started</Text>
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
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
