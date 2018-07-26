import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image,
    Dimensions,ImageBackground, TouchableHighlight,StatusBar,TextInput } from 'react-native';
export default class SignUpScreen extends Component {
  render() {
    const width=Dimensions.get('window').width;
    const height=Dimensions.get('window').height;
    return (        
      <View style={styles.container}>
      <StatusBar hidden={true} />
        <ImageBackground  style={{width:width,height:height,flex:1}} source={require('../../assets/images/bg-mcd.png')}>
        <View style={{flex:1,backgroundColor:'#ffffff',opacity:0.7,
        position:'absolute',top:0,left:0,height:'95%',width:'86%',
        marginLeft:'7%',marginRight:'7%',marginTop:'5%'}}>
        </View>   
        
        <View style={{flex:1,position:'absolute',top:0,left:0,height:'95%',
        width:'86%',
        marginLeft:'7%',marginRight:'7%',marginTop:'5%',flexDirection:'column'}}>
          <View style={{flex:0.2,flexDirection:'column',alignItems:'center'}}>
          <Image source={require('../../assets/images/mycoindeal.png')} />
          </View>
          <View style={{flex:0.8}}>
          <TextInput
          style={{height: 40,marginLeft:'5%', width:'90%', borderColor: 'red',borderWidth:2,
          borderLeftWidth:0,borderRightWidth:0
        ,borderEndWidth:2,borderTopWidth:0}}
          
          
        />
         
          </View>
        </View>
        <View>
        </View>
        </ImageBackground >
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
      color:'white',
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
