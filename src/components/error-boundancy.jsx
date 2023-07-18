import * as React from 'react';
import ErrorScreen from '../screens/error';



class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

   static getDerivedStateFromError(_error) {
    return {hasError: true};
  }

   componentDidCatch(_error, _errorInfo){}

  private resetState = ()=> {
    this.setState({hasError: false});
  };

  public render() {
    if (this.state.hasError) {
      return <ErrorScreen resetError={this.resetState} />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;