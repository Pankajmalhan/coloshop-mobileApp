

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar, ImageBackground,Image,TouchableHighlight} from 'react-native';
import {Button,Spinner, Item, Input, Label} from 'native-base';
import HeaderComponent from '../../components/header/header';
import FormValidator from '../../validation/validator';
import signInFormValidationRules from '../../validation/validationRules/signInFormRules';
import BasicTextInput from '../../components/textInput/basicTextInput';

export default class LogInScreen extends Component {

  constructor(props){
    super(props);
    this.validator=new FormValidator(signInFormValidationRules);
    this.state={
      isSubmittedClick:false,
      userName:'',
      password:'',
      validation:this.validator.valid(),
      showSpinner:false
    };
  }

  moveToBack=()=>{
    this.props.navigation.goBack();
  }

  onTextChange=(event,controlName)=>{
    var value=event.nativeEvent.text;
     this.setState((previousState)=>{
       return{
         [controlName]:value
       }
     })  
  }
  
  buttonPress=()=>{
        const validationResult = this.validator.validate(this.state);
        this.setState((previousState)=>{
          return {
            validation:validationResult,
            isSubmittedClick:true
          }
        });
    if(validationResult.isValid){
      this.setState({
        showSpinner:true
      });
      this.props.navigation.navigate('StaringScreen');
    }
  }

  renderButtonContent=()=>{
    return this.state.showSpinner?<Spinner color='white' /> :<Text style={{color:'#fff',fontSize:20}}>LogIn</Text>
  }

  render() {
    let validation = this.state.isSubmittedClick ?                         // if the form has been submitted at least once
    this.validator.validate(this.state) :   // then check validity every time we render
    this.state.validation ;
    return (
      <View style={styles.container}>
      <StatusBar hidden={true} />
        <View style={{flex:0.3,flexDirection:'row',justifyContent:'center'}}>
        <ImageBackground  style={{width:'100%',height:'100%',flex:1}} source={require('../../assets/images/bgCover.jpg')}>
          <View style={{flexDirection:'row',flex:1,alignItems:'center',justifyContent:'center'}}>
                    <Text style={{fontSize:30,color:'#39efe5',fontWeight:'800'}}>COLO</Text>
                    <Text style={{fontSize:30,color:'#fe4c50',fontWeight:'800'}}>SHOP</Text>
          </View>
        </ImageBackground>
        </View>
        <View style={{flex:0.8,flexDirection:'column',alignContent:'flex-start'}}>                      
            <View style={{width:'78%'}}>
            <BasicTextInput
              component={{
                isInvalid:validation.userName.isInvalid,
                name:'userName',
                displayText:'UserName',
                onChange:this.onTextChange,
                secureTextEntry:false,
                testID:'userName',
                value:this.state.userName,
                message:validation.userName.message
              }}
             />
            </View>            
            <View style={{width:'78%',marginTop:30}}>
            <BasicTextInput
              component={{
                isInvalid:validation.password.isInvalid,
                name:'password',
                displayText:'Password',
                onChange:this.onTextChange,
                secureTextEntry:true,
                testID:'password',
                value:this.state.password,
                message:validation.password.message
              }}
             />
            </View>
              <Button block style={{marginTop: 40,borderTopColor:'#0e3c87'}} onPress={this.buttonPress}>
                      {this.renderButtonContent()}
             </Button>
            <View style={{alignItems:'center',marginTop:10}}>
            <TouchableHighlight
                            onPressIn={this.onPressInClick}
                            onPressOut={this.onPressOutClick}
                            onPress={()=>{this.props.navigation.navigate('SignUpScreen')}}
                            underlayColor="#39efe5">
                            <View>
                            <Text style={{color:'#0e3c87',fontSize:18,fontWeight:'600'}}>
                                    Create an account
                            </Text>
                            </View>
                        </TouchableHighlight>
            </View>
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
