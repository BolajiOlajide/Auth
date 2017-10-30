/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Header, Button, Spinner } from './src/components/common';
import LoginForm from './src/components/LoginForm';

export default class App extends Component<{}> {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      user: {}
    };

    this.renderContent = this.renderContent.bind(this);
  }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAHCwzSMDtSR8kXydIFoY1rZ28bb_PXtQg',
      authDomain: 'auth-8b99e.firebaseapp.com',
      databaseURL: 'https://auth-8b99e.firebaseio.com',
      projectId: 'auth-8b99e',
      storageBucket: 'auth-8b99e.appspot.com',
      messagingSenderId: '534864189491'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case false:
        return <LoginForm />;

      case true:
        return (
          <Button>Sign Out</Button>
        );

      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View>
        <Header text="Authentication" />
        {this.renderContent}
      </View>
    );
  }
}
