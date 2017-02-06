/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TextInput,
  NavigatorIOS,
  Navigator,
  ScrollView,
  Text,
  Button,
  Image,
  Keyboard,
  TouchableHighlight,
  View
} from 'react-native';

const BreederStyle = require('../style/BreederStyleSheet');
const CommonStyles = require('../style/commonStyles');

import TextField from 'react-native-md-textinput';

import {CustomButton,CommonNavigator} from './util';

class BreedType extends React.Component {
  constructor(props) {
    super(props);
  }

 render() {
        return (
        <View style = {BreederStyle.PageStyle.container}>
          <ScrollView contentContainerStyle={BreederStyle.PageStyle.container}>
              <TextField label={this.props.BreederName}  highlightColor={'#00BCD4'} />
              <TextField label={'Last Name'}  highlightColor={'#00BCD4'} />
          </ScrollView>
          </View>
    )};
}


class BreederInformation extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        firstName:' ',
        lastName:' ',
        phoneNumber:' ',
        email:' ',
        address: ' ',
        myNumber:0
      }
    }


  onChange(text) {

      let newText = '';
      let numbers = '0123456789';

    for (var i = 0; i < text.length; i++) {
        if ( numbers.indexOf(text[i]) > -1 ) {
            newText = newText + text[i];
        }
    }   
    this.setState({myNumber: newText})
  }

  componentWillMount () {
    /*this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
   */
   }

  componentWillUnmount () {
   /* this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();*/
  }

  _keyboardDidShow () {
    alert('Keyboard Shown');
  }

  _keyboardDidHide () {
    alert('Keyboard Hidden');
  }

  onPressNext() {
      this.props.navigator.push({
        component: BreedType
        
      })
  }

  onPressNext() {
      this.props.navigator.push({
        component: BreedType,
        name: 'Welcome ' + this.state.firstName,
        BreederName: this.state.firstName,
        passProperty: {
          BreederName: this.state.firstName
        }
      })
  }

  render() {
  return(
     <View style = {BreederStyle.PageStyle.container}>
          <ScrollView contentContainerStyle={BreederStyle.PageStyle.container}>
              <TextField label={'First Name'}  onChangeText={(firstName) => this.setState({firstName})} value={this.state.firstName==' '?'':this.state.firstName}  highlightColor={'#00BCD4'} />
              <TextField label={'Last Name'}  onChangeText={(lastName) => this.setState({lastName})} value={this.state.lastName==' '?'':this.state.lastName} highlightColor={'#00BCD4'} />
              <TextField label={'Email'}  onChangeText={(email) => this.setState({email})} value={this.state.email==' '?'':this.state.email} highlightColor={'#00BCD4'} keyboardType={'email-address'}  />
              <TextField label={'Phone Number'} 
                                onChangeText={(phoneNumber) => this.setState({phoneNumber})} value={this.state.phoneNumber==' '?'':this.state.phoneNumber}
                                highlightColor={'#00BCD4'} 
                                keyboardType={'numeric'} 
                                maxLength={10}
                                onSubmitEditing={Keyboard.dismiss}
                                /*onChangeText = {(text) => {this.onChange(text)}}
                                value = {this.state.myNumber} */
                                />
              <TextField label={'Address'} onChangeText={(address) => this.setState({address})} value={this.state.address==' '?'':this.state.address}  highlightColor={'#00BCD4'} multiline={true}/>
            </ScrollView>
            <CustomButton  navigator={this.props.navigator} onPress={() => {this.onPressNext()}} label='Next'/>
            </View>
          )
      }
}

export default class BreederRegistrationPage extends React.Component {


  render() {
      return(
         /* <CommonNavigator component={BreederInformation} name='BreederInformation'/>*/
       <BreederInformation  navigator={this.props.navigator} />
      )
  }
}


module.exports =  BreederRegistrationPage;