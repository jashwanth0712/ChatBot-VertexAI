import Dashboard from './Admin/Dashboard'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Signin, EmailList } from './test';

class App extends React.Component {
  state = {
    isAuthenticated: false, // Initially user is not authenticated
  };

  render() {
    const { isAuthenticated } = this.state;

    return (
        <div>
          {/* <Dashboard isAuthenticated={isAuthenticated} /> Pass isAuthenticated to Dashboard component */}
              {isAuthenticated ? <EmailList /> : <Signin />} {/* Render EmailList component if authenticated, otherwise render Signin */}
              <Signin /> {/* Render Signin component for all other routes */}
        </div>
    );
  }
}

export default App;
