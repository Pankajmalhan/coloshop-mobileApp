import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,TouchableNativeFeedback,StatusBar} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
export default class HeaderComponent extends Component {
  render() {
    return (
        <Header style={{width:'100%',backgroundColor:'#0e3c87'}}>
        {
            this.props.leftHeader && <Left>
                <TouchableNativeFeedback onPress={()=>this.props.leftHeader.onPress()}>
                <Image source={this.props.leftHeader.imageUrl} style={{height:30,width:30}} />
                </TouchableNativeFeedback>          
          </Left>
        }
          <Body>
              {
                  this.props.headerTitle && <Title>Go Back</Title>
              }
          </Body>
          {
              this.props.rightHeader && <Right>
              <Button transparent>
                <Icon name='menu' />
              </Button>
            </Right>
          }
         
        </Header>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
