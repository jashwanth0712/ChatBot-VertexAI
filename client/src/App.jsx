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
        <Routes>
          <Route path="/" element={<Signin/>}/>
          <Route path="/Dashboard" element={<Dashboard/>}/>
        </Routes>
        </div>
    );
  }
}

export default App;
