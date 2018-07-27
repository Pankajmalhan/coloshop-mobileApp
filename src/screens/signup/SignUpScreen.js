

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar, AccessibilityInfo,Image,TouchableWithoutFeedback} from 'react-native';
import {Button,Spinner, Item, Input, Label} from 'native-base';
import HeaderComponent from '../../components/header/header';
import FormValidator from '../../validation/validator';
import {signupUserNameValidationRules} from '../../validation/validationRules/signUpFormRules';
import BasicTextInput from '../../components/textInput/basicTextInput';

export default class SignUpScreen extends Component {

  constructor(props){
    super(props);
    this.validator=new FormValidator(signupUserNameValidationRules);
    this.state={
      isSubmittedClick:false,
      emailId:'',
      userName:'',
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
      setTimeout(()=>{
        this.setState({
          showSpinner:false
        });
        this.props.navigation.navigate('PasswordScreen');
      },1000);
    }
  }

  renderButtonContent=()=>{
    return this.state.showSpinner?<Spinner color='white' /> :<Text style={{color:'#fff',fontSize:20}}>NEXT</Text>
  }

  render() {
    let validation = this.state.isSubmittedClick ?                         // if the form has been submitted at least once
    this.validator.validate(this.state) :   // then check validity every time we render
    this.state.validation ;
    return (
      <View style={styles.container}>
      <StatusBar hidden={true} />
      <HeaderComponent 
         headerTitle={{text:'step 1/3'}}
         subTitle={{
          text:'Choose a username'
        }}
        leftHeader={ {
        imageUrl:require('../../assets/images/leftArrow.png'),
        onPress:this.moveToBack
      }}></HeaderComponent>
        <View style={{flex:0.2,flexDirection:'row',justifyContent:'center'}}>
          <Text style={{marginLeft:'10%',marginTop:20,color:'#2e3033'}}>Your username will be required to sign in your COLOSHOP account on this and 
            other device
          </Text>
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
                testID:'password',
                value:this.state.userName,
                message:validation.userName.message
              }}
             />
            </View>            
            <View style={{width:'78%',marginTop:30}}>
            <BasicTextInput
              component={{
                isInvalid:validation.emailId.isInvalid,
                name:'emailId',
                displayText:'EmailId',
                onChange:this.onTextChange,
                secureTextEntry:false,
                testID:'emailId',
                value:this.state.emailId,
                message:validation.emailId.message
              }}
             />
            </View>
              <Button block style={{marginTop: 40,borderTopColor:'#0e3c87'}} onPress={this.buttonPress}>
             {this.renderButtonContent()}
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
