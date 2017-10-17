import React, { Component } from 'react';
import { TextInput } from 'react-native';
// components
import { Button, Card, CardSection } from './common';

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      text: ''
    };
  }

  render() {
    return (
      <Card>
        <CardSection>
          <TextInput
            value={this.state.text}
            onChangeText={text => this.setState({ text })}
            style={{ height: 40, width: 100 }}
          />
        </CardSection>

        <CardSection>
          <TextInput
            value={this.state.text}
            onChangeText={text => this.setState({ text })}
            style={{ height: 40, width: 100 }}
          />
        </CardSection>

        <CardSection>
          <Button>
            Log In
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
