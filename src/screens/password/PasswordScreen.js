import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar, AccessibilityInfo,Image} from 'react-native';
import {Button,Spinner, Item, Input, Label} from 'native-base';
import HeaderComponent from '../../components/header/header';
import FormValidator from '../../validation/validator';
import {PasswordValidationRules} from '../../validation/validationRules/passwordRules';
import BasicTextInput from '../../components/textInput/basicTextInput';
export default class PasswordScreen extends Component {

  constructor(props){
    super(props);
    this.validator=new FormValidator(PasswordValidationRules);
    this.state={
      isSubmittedClick:false,
      isFocused:false,
      validationRules:[
        {message:"Must have at least 8 characters",isFullFill:false},
        {message:"Must have at least 1 lower letter",isFullFill:false},
        {message:"Must have at least 1 uppercase",isFullFill:false},
        {message:"Must have at least 1 number",isFullFill:false}
      ],
      password:'',
      confirmPassword:'',
      validation:this.validator.valid(),
      showSpinner:false
    }
  }

  renderPasswordHints=()=>{
    return this.state.validationRules.map((rule)=>{
      return (
        <View style={{marginLeft:'10%',flexDirection:'row'}}>
              <Image style={{height:20,width:20,marginTop:20}} 
                  source={rule.isFullFill?require('../../assets/images/right.png'):require('../../assets/images/wrong.png')} />
            <Text style={{marginLeft:'5%',marginTop:20,color:'#2e3033'}}>
                {rule.message}
            </Text>
        </View>  
      )
    } )
  }
  moveToBack=()=>{
    this.props.navigation.goBack();
  }
  onTextChange=(event,controlName)=>{
    var value=event.nativeEvent.text;
     this.setState((previousState)=>{
       return{
        [controlName]:value,
        validationRules:[
        {message:"Must have at least 8 characters",isFullFill:value.length>=8},
        {message:"Must have at least 1 lower letter",isFullFill:/[a-z]/.test(value)},
        {message:"Must have at least 1 uppercase",isFullFill:/[A-Z]/.test(value)},
        {message:"Must have at least 1 number",isFullFill:/[0-9]/.test(value)}
        ]
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
        this.props.navigation.navigate('SignUpScreen');
      },1000);
    }
  }

  setFocus=()=>{
    this.setState({isFocused:true});
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
         headerTitle={{text:'step 2/3'}}
         subTitle={{
          text:'Set a password'
        }}
          leftHeader={ {
          imageUrl:require('../../assets/images/leftArrow.png'),
          onPress:this.moveToBack
        }}>

      </HeaderComponent>       
        <View style={{flex:1,flexDirection: 'column',alignContent:'flex-start',width:'100%'}}>
          <View style={{width:'100%', flex:0.35,backgroundColor:'#c7c9cc'}}>
         {
           !this.state.isFocused &&  <Text style={{marginLeft:'5%',marginTop:20,color:'#2e3033'}}>
                The password is used to login and change sensitive settings
          </Text> 
         }
          {
            this.state.isFocused && this.renderPasswordHints()
          } 
          </View>
        <View style={{flex:0.65,marginTop:10,width:'100%',}}>
            <View style={{width:'78%',marginLeft:'10%'}}>
            <BasicTextInput
              component={{
                isInvalid:validation.password.isInvalid,
                name:'password',
                displayText:'Password',
                onChange:this.onTextChange,
                onFocus:this.setFocus,
                secureTextEntry:true,
                testID:'password',
                value:this.state.password,
                message:validation.password.message
              }}
             />
              
            </View>    
            <View style={{width:'78%',marginLeft:'10%',marginTop:30}}>
            <BasicTextInput
              component={{
                isInvalid:validation.confirmPassword.isInvalid,
                name:'confirmPassword',
                displayText:'Confirm Password',
                onChange:this.onTextChange,
                secureTextEntry:true,
                testID:'confirmPassword',
                value:this.state.confirmPassword,
                message:validation.confirmPassword.message
              }}
             />
            </View> 
           
            <Button block style={{marginTop: 40,borderTopColor:'#0e3c87',marginLeft:'10%',width:'78%'}} onPress={this.buttonPress}>
             {this.renderButtonContent()}
          </Button>
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
