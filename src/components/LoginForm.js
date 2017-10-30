import React, { Component } from 'react';

// firebase
import firebase from 'firebase';

// third-party libraries
import Toast from 'react-native-easy-toast';

// components
import { Button, Card, CardSection, Input, Spinner } from './common';


class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      loading: false
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.renderButton = this.renderButton.bind(this);
    this.onLoginSuccess = this.onLoginSuccess.bind(this);
    this.onLoginFail = this.onLoginFail.bind(this);
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      loading: false
    });

    this.refs.toast.show('Login Successful!');
  }

  onLoginFail() {
    this.refs.toast.show('Authentication Failed!');
    this.setState({ loading: false });
  }

  handleLogin() {
    const { email, password } = this.state;

    this.setState({ loading: true });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess)
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess)
          .catch(this.onLoginFail);
      });
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size='small' />;
    }

    return (
      <Button onPress={this.handleLogin}>
        Log In
      </Button>
    );
  }

  render() {
    return (
      <Card>
        <Toast
          ref="toast"
          style={{ backgroundColor: 'red' }}
          position='top'
          positionValue={200}
          fadeInDuration={750}
          fadeOutDuration={1000}
          opacity={0.8}
          textStyle={{ color: 'white' }}
        />

        <CardSection>
          <Input
            label="Email"
            placeholder="abc@gmail.com"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            placeholder="password"
            value={this.state.password}
            label="Password"
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
