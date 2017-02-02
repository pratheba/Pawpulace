'use strict';


//var React = require('react-native');
var Dimensions = require('Dimensions');
var windowDimension = Dimensions.get('window');
var bubbleRadius = (windowDimension.width)/2;

import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
    StyleSheet,
    Text,
    View,
    NavigatorIOS,
    Image,
    TouchableHighlight,
    TextInput,
} from 'react-native';

import { Col, Row, Grid } from "react-native-easy-grid";


const BreederStyle = require('../style/BreederStyleSheet');
const ToolbarStyle = require('../style/commonStyles');
const HomePageStyle= require('../style/HomePageStyle');


class ToggleButton extends Component {
    render() {
        return (
        <TouchableHighlight underlayColor='rgba(73,182,77,0.9)' style={BreederStyle.ImageStyle.bubbleImage} onPress={this.props.onPress}>
            
            <Image style={BreederStyle.ImageStyle.bubbleImage} source={this.props.source}>

                <View style= {[BreederStyle.ImageStyle.overlay, this.props.selected ? {backgroundColor: 'rgba(80,94,104,0)'} : {} ]}>
                    <Text style={BreederStyle.ImageStyle.overlayText}>{this.props.label}</Text>
                </View>
            
            </Image>
        
        </TouchableHighlight>
        );
    }
}

class BreederRegistration extends Component {
    render() {
        return (
            <View>
            <Text>'Hi Breeder' </Text>
            </View>
            );
    }
}

class PetParentRegistration extends Component {
    render() {
        return (
            <View>
            <Text>'Hi Pet Parent' </Text>
            </View>
            );
    }
}

class FosterParentRegistration extends Component {
    render() {
        return (
            <View>
            <Text>'Hi Foster Parent' </Text>
            </View>
            );
    }
}

class ButtonRole extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Breeder: false,
            PetParent: false,
            FosterParent: false,
        };
        this.breederImage = require('../assets/face.png');
        this.petParentImage =  require('../assets/face.png');
        this.fosterParentImage = require('../assets/face.png');
    }

     static propTypes = {
        title: PropTypes.string.isRequired,
        navigator: PropTypes.object.isRequired,
    }

    _handleHomePress() {
        this.props.navigator.pop();
    }

    updateChoice(type) {
        let newState = {...this.state};
        newState[type] = !newState[type];
        this.setState(newState);
        this.onButtonPress(type);
    }

    onButtonPress(type){
        switch(type) {
            case 'Breeder':
                this.props.navigator.push({
                    component: BreederRegistration,
                    title:'Welcome Breeder',
                })
            case 'PetParent':
                this.props.navigator.push({
                    component: PetParentRegistration,
                    title: 'Welcome Parent',
                })
            case 'FosterParent':
                this.props.navigator.push({
                    component: FosterParentRegistration,
                     title: 'Welcome Foster Parent',
                })
        }
    }

    render() {
        return (

            <Grid style={{paddingTop:20, paddingBottom:20, paddingLeft:20, paddingRight:20}}>
                  <Row>
                        <Col>
                             <ToggleButton label='Breeder' source= {this.breederImage} onPress={() => { this.updateChoice('Breeder') }} selected={this.state.Breeder} />
                        </Col>
                        <Col></Col>
                        <Col>
                            <ToggleButton label='PetParent' source={this.petParentImage} onPress={() => { this.updateChoice('PetParent') }} selected={this.state.PetParent} /> 
                        </Col>
                  </Row>
                  <Row>
                        <Col></Col>
                        <Col>
                            <ToggleButton label='FosterParent' source={this.fosterParentImage} onPress={() => { this.updateChoice('FosterParent') }} selected={this.state.FosterParent} />
                        </Col>
                        <Col></Col>
                  </Row>
            </Grid>
            );
    }
}

class HomeView extends Component {
   static propTypes = {
      navigator: PropTypes.object.isRequired,
    }

    render() {
        return (
            <View style={HomePageStyle.PageStyle.container}>
                        <View style={HomePageStyle.PageStyle.chooseRoleBox}>
                            <View style={{flex:1 , flexDirection:'column'}}>
                                
                                <Text style={HomePageStyle.PageStyle.chooseRoleTitleText}>
                                      Are you a:
                                </Text>
                                <ButtonRole navigator={this.props.navigator} />

                            </View>
                        </View>
                    </View>
        );
    }
}

export default class SelectRole extends Component {

    static propTypes = {
      title: PropTypes.string.isRequired,
    }

    render() {
        return (
            <NavigatorIOS ref='nav'
                    initialRoute={{
                    component: HomeView,
                    title: 'Home',
                    }}
                    style={{flex: 1}}
            />
        );
    }
}


module.exports = SelectRole;