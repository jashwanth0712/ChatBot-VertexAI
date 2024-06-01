import Dashboard from './Admin/Dashboard'
import React from 'react';

import { Signin, EmailList } from './test';

class App extends React.Component {
  state = {
    isAuthenticated: false, // Initially user is not authenticated
  };

      

  render() {
    const { isAuthenticated } = this.state;

    return (
        <div>
<<<<<<< HEAD
        <Routes>
          <Route path="/" element={<Signin/>}/>
          <Route path="/Dashboard" element={<Dashboard/>}/>
        </Routes>
=======
          {/* <Dashboard isAuthenticated={isAuthenticated} /> Pass isAuthenticated to Dashboard component */}
              {isAuthenticated ? <EmailList /> : <Signin />} {/* Render EmailList component if authenticated, otherwise render Signin */}
              {/* <Signin /> Render Signin component for all other routes */}
>>>>>>> 924d9e0df2f8c0deb90c83cd95b7413a0d12cece
        </div>
    );
  }
}

export default App;
