

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image,
    Dimensions,ImageBackground, TouchableHighlight,StatusBar } from 'react-native';

export default class UserRegistrationScreen extends Component {
    constructor(props){
        super(props);
        this.state={
            textColor:{color:'#39efe5'}
        }
    }

    onPressInClick=()=>{
        this.setState((previousState)=>({
            textColor:{color:'#000'}
        }));
    }

    onPressOutClick=()=>{
        this.setState((previousState)=>({
            textColor:{color:'#39efe5'}
        }))
    }

  render() {
    const width=Dimensions.get('window').width;
    const height=Dimensions.get('window').height;
    return (        
      <View style={styles.container}>
      <StatusBar hidden={true} />
        <ImageBackground  style={{width:width,height:height,flex:1}} source={require('../../assets/images/bg_registeruser.jpg')}>
        <View style={{flex:1,backgroundColor:'#02382e',opacity:0.7,position:'absolute',top:0,left:0,height:'100%',width:'100%'}}>
        </View>   
        
        <View style={{flex:1,position:'absolute',top:0,left:0,height:'100%',width:'100%'}}>
            <View style={styles.logoContainer}>
                    <Text style={{fontSize:24,color:'#39efe5',fontWeight:'800'}}>COLO</Text>
                    <Text style={{fontSize:24,color:'#fe4c50',fontWeight:'800'}}>SHOP</Text>
            </View>
            <View style={styles.discriptionContainer}>
                <Text style={{color:'white'}}>Welcome to ColoShop App! </Text>
                <Text style={{color:'white'}}>We always try to provide that you needs </Text>
            </View>
            <View style={styles.buttonContainer}>
                <View>
                   
                        <View style={{borderColor:'#39efe5',marginLeft:'10%',marginRight:'10%',borderWidth:2, borderRadius:4}}>
                        <TouchableHighlight
                            onPressIn={this.onPressInClick}
                            onPressOut={this.onPressOutClick}
                            onPress={()=>{this.props.navigation.navigate('InstructionsScreen')}}
                            underlayColor="#39efe5">
                            <View>
                                <Text style={[styles.accountButton,this.state.textColor]}>
                                    Create Account
                                </Text>
                            </View>
                        </TouchableHighlight>
                        </View>
                </View>
                <View style={{marginTop:20,flexDirection:'column',alignItems:'center'}}>
                        <TouchableHighlight
                            onPressIn={this.onPressInClick}
                            onPressOut={this.onPressOutClick}
                            onPress={()=>{this.props.navigation.navigate('LogIn')}}
                            underlayColor="#39efe5">
                            <View>
                            <Text style={{color:'#fff'}}>
                                    Already have an account? Sign In
                            </Text>
                            </View>
                        </TouchableHighlight>          
                </View>
            </View>
        </View>
        <View>
        </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  logoContainer:{
      flex:0.3,
      flexDirection: 'row' ,
      justifyContent:'center',
      alignItems: 'flex-end',
  },
  discriptionContainer:{
      flex:0.2,
      flexDirection: 'column',
      alignItems: 'center',
      paddingTop: '5%',
  },
  buttonContainer:{
      flex:0.5,
      justifyContent:'center'
  },
  accountButton:{
    paddingTop:10,
    paddingBottom:10,
    fontSize:20,                                 
    paddingLeft:'30%'
  }
});
