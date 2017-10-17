/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Header } from './src/components/common';
import LoginForm from './src/components/LoginForm';

export default class App extends Component<{}> {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAHCwzSMDtSR8kXydIFoY1rZ28bb_PXtQg',
      authDomain: 'auth-8b99e.firebaseapp.com',
      databaseURL: 'https://auth-8b99e.firebaseio.com',
      projectId: 'auth-8b99e',
      storageBucket: 'auth-8b99e.appspot.com',
      messagingSenderId: '534864189491'
    });
  }

  render() {
    return (
      <View>
        <Header text="Authentication" />
        <LoginForm />
      </View>
    );
  }
}
