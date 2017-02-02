/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  TouchableHighlight,
  View
} from 'react-native';

const BreederStyle = require('./BreederStyleSheet');
const CommonStyles = require('./commonStyles');


export default class BreederRegistration extends React.Component {
   
      render() {
            return (
               <View style= {styles.mainContainer}>
                <View style={CommonStyles.ToolBarStyle.toolbar}>
                    <Text style={CommonStyles.ToolbarStyle.toolbarTitle}>Pawpulace</Text>
                </View>
                </View>
    );
  }
}

var styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
});

AppRegistry.registerComponent('BreederRegistration', () => BreederRegistration);