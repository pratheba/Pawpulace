import React, { Component, PropTypes } from 'react';
import {
    Navigator,
    Text,
    View,
    Button,
    Image,
    StyleSheet,
    TouchableHighlight
} from 'react-native';

import AwesomeButton from 'react-native-awesome-button';


const CommonStyle = require('../style/commonStyles');
const BreederStyle = require('../style/BreederStyleSheet');

export class CommonNavigator extends Component {

    constructor(props) {
        super(props);
    }

    renderScene(route, navigator) {
        return <route.component navigator={navigator} {...route.passProperty} />
    }

    configureScene(route, routeStack) {
            return Navigator.SceneConfigs.PushFromRight
    }

    render() {
        return (
            <Navigator
                    configureScene={ this.configureScene }
                    style={CommonStyle.MainStyle.mainContainer}
                    renderScene = {this.renderScene}
                    initialRoute={{ component: this.props.component,  name:this.props.name}}
                    navigationBar = {
                        <Navigator.NavigationBar style = {CommonStyle.NavigationBarStyle.container}
                            routeMapper = {NavigationBarRouteMapper} {...this.props}/>
                    } >
            </Navigator>
        );
    }
}

var NavigationBarRouteMapper = {
    
    LeftButton(route, navigator, index, navState) {
            if(index > 0) {
                  return (
                    <TouchableHighlight underlayColor="transparent" onPress={() => { if (index > 0) { navigator.pop() } }}>
                      <Text style={ CommonStyle.NavigationBarStyle.leftNavButtonText }> Back </Text>
                    </TouchableHighlight>
            )} 
            else { return null }
    },

  RightButton(route, navigator, index, navState) {
    if (route.onPress) {
        return ( 
            <TouchableHighlight onPress={ () => route.onPress() }>
                <Text style={ CommonStyle.NavigationBarStyle.rightNavButtonText }> { route.rightText || 'Right Button' }>
                 </Text>
            </TouchableHighlight> 
            )
    }
  },

  Title(route, navigator, index, navState) {
    return <Text style={ CommonStyle.NavigationBarStyle.title }>{route.name}</Text>
  }
}

export class CustomButton extends React.Component {


    render() {
        return (
            <Button
                style={{fontSize: 20, color: 'green', borderRadius:4}}
                onPress={this.props.onPress}
                title={this.props.label}
                 />

            /*<View style={styles.container}>
                    <AwesomeButton states={{
                                    default: {
                                      text: this.props.label,
                                      onPress: this.props.onPress,
                                      backgroundColor: '#1155DD'
                                    }
                                   }} />
      </View>*/
  
        );
    }
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    height:50,
    alignItems: 'center',
    justifyContent: 'center',

     paddingTop:10,
     paddingBottom:10,
    flexDirection:'row'   
  },
  loginButtonBackground: {
    flex: 1,
    height: 40,
    borderRadius: 5
  },
  loginButtonLabel: {
    color: 'white'
  }
})


/*export function NavigationBarRouteMapper;*/

/*
export function HelloChandu() {
}

export function HelloTester() {
}

import { HelloChandu } from './helpers'
*/

