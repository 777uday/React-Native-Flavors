/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Alert,
  NativeModules
} from 'react-native';
import { buildFlavor, flavor } from './flavors';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component{
  constructor(props){
    super();
    this.state = {};
  }

  componentWillMount(){
    buildFlavor().then((uday)=>{
      console.log("app.js:"+JSON.stringify(uday));
      Alert.alert("app.js:"+uday);
      console.log("app.js:flavor:"+JSON.stringify(flavor));
      Alert.alert("app.js:flavor:"+JSON.stringify(flavor));
      this.setState({isInitialised:true});
    });
  }

  render() {
    if(this.state.isInitialised){
      return (
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Welcome to React Native!
          </Text>
          <Text style={styles.instructions}>
            To get started, edit App.js
          </Text>
          <Text style={styles.instructions}>
            {instructions}
          </Text>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Failed loading.
          </Text>
        </View>
      );
    }
    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
