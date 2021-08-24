import React, { Component } from 'react';
import './ErrorBoundary.css';

class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    return this.state.hasError ? (
      <div className='error-image-overlay'>
        <div
          className='error-image-container'
          style={{ backgroundImage: 'url(https://i.imgur.com/yW2W9SC.png)' }}
        />
        <div className='error-image-text'>Sorry this page is broken</div>
      </div>
    ) : (
      this.props.children
    );
  }
}

export default ErrorBoundary;
