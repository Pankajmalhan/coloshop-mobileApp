import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,TouchableNativeFeedback,StatusBar} from 'react-native';
import { Item, Input, Label} from 'native-base';
import PropTypes from 'prop-types';

const BasicTextInput=(props)=>{
    return <View style={{width:'100%'}}>
            <Item floatingLabel style={{width:'100%'}} >
                <Label style={{color:props.component.isInvalid?"#e03a1d":"#0e3c87"}}>{props.component.displayText}</Label>
                <Input underlineColorAndroid={props.component.isInvalid?"#e03a1d":props.component.labelColor} 
                        onChange={(value)=>props.component.onChange(value,props.component.name)}
                        onFocus={()=>{ if(props.component.onFocus!=undefined){ props.component.onFocus()}}}
                        secureTextEntry={props.component.secureTextEntry}
                        testID={props.component.name} 
                        value={props.component.value} />
              </Item>
              {
                props.component.isInvalid && <Text style={{color:'#000'}}>{props.component.message}</Text>
              }
  </View>
}

BasicTextInput.propTypes = {
    component: PropTypes.shape({
        isInvalid:PropTypes.bool.isRequired,
        name:PropTypes.string.isRequired,
        onChange:PropTypes.func.isRequired,
        onFocus:PropTypes.func,
        secureTextEntry:PropTypes.bool,
        testID:PropTypes.string.isRequired,
        value:PropTypes.string.isRequired,
        message:PropTypes.string.isRequired,
        displayText:PropTypes.string.isRequired,
        labelColor:PropTypes.string
    })
  };


BasicTextInput.defaultProps={
    component:{
        secureTextEntry:false,
        labelColor:'#0e3c87'
    }
}

export default BasicTextInput;