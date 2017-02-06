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
  Keyboard,
  TouchableHighlight,
  View
} from 'react-native';

const BreederStyle = require('../style/BreederStyleSheet');
const CommonStyles = require('../style/commonStyles');
import TextField from 'react-native-md-textinput';


class BreedType extends React.Component {
  constructor(props) {
    super(props);
  }

 render() {
        return (
      <Text> {passProperty.BreederName} </Text>
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
      this.handleOnChangeText = this.handleOnChangeText.bind(this);
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
        component: BreedType,
        BreederName: this.getState('firstName'),
        passProperty: {
          BreederName: this.getState('firstName')
        }
      })
  }

  handleOnChangeText(event,type) {
    if(type == 'firstName')
      this.setState({firstName: event.target.value});

    if(type == 'lastName')
      this.setState({lastName: event.target.value});

    if(type == 'phoneNumber')
      this.setState({phoneNumber: event.target.value});

    if(type == 'email')
      this.setState({email: event.target.value});

    if(type == 'address')
      this.setState({address: event.target.value});
  }

  render() {
  return(
     <View style = {BreederStyle.PageStyle.container}>
          <ScrollView contentContainerStyle={BreederStyle.PageStyle.container}>
              <TextField label={'First Name'} onChange={this.handleOnChangeText('firstName')} highlightColor={'#00BCD4'} />
              <TextField label={'Last Name'} onChange={this.handleOnChangeText('lastName')} highlightColor={'#00BCD4'} />
              <TextField label={'Email'} onChange={this.handleOnChangeText('email')} highlightColor={'#00BCD4'} keyboardType={'email-address'}/>
              <TextField label={'Phone Number'} 
                                onChange={this.handleOnChangeText('phoneNumber')}
                                highlightColor={'#00BCD4'} 
                                keyboardType={'numeric'} 
                                maxLength={10}
                                onSubmitEditing={Keyboard.dismiss}
                                /*onChangeText = {(text) => {this.onChange(text)}}*/
                                /*value = {this.state.myNumber} *//>
              <TextField label={'Address'} onChange={this.handleOnChangeText('address')} highlightColor={'#00BCD4'} multiline={true}/>
            </ScrollView>
            <Button
                  navigator={this.props.navigator}
                  onPress={this.onPressNext}
                  title="Next"
                  color="#841584"
                  accessibilityLabel="Learn more about this purple button"
                /> 
                </View>
            )
      }
}

export default class BreederRegistration extends React.Component {
    onPressNext() {
      this.props.navigator.push({
        component: BreedType,
        BreederName: 'hi',
        passProperty: {
          BreederName: this.getState('firstName')
        }
      })
  }

    render() {
        return(
          <TouchableHighlight navigator={this.props.navigator} underlayColor='rgba(73,182,77,0.9)'  onPress={this.onPressNext}  >
          <View >
                    <Text style={{ paddingTop:100}}>Next</Text>
                </View>
          </TouchableHighlight>
      );
    }
}


module.exports = BreederRegistration;