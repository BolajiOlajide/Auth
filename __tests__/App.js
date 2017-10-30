import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

// component
import App from '../App';

describe('App Component', () => {
  it('should be defined', () => {
    expect(App).toBeDefined();
  });

  it('renders correctly', () => {
    const tree = renderer.create(
      <App />
    );
    expect(tree).toMatchSnapshot();
  });
});
