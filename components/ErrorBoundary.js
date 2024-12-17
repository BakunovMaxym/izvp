import React, { Component } from 'react';
import { Text, View } from 'react-native';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    console.log('Error:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return <Text>Error: {this.state.error?.toString()}</Text>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
