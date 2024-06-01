import React from 'react';
import axios from 'axios';

class Signin extends React.Component {
  handleSignin = () => {
    window.location.href = 'http://localhost:5000/auth/google'; // Redirect to the backend server for Google OAuth
  };

  render() {
    return (
      <div>
        <button onClick={this.handleSignin}>Sign in with Google</button>
      </div>
    );
  }
}

class EmailList extends React.Component {
  state = {
    emails: [],
    loading: true,
    isAuthenticated: false, // Add isAuthenticated state
  };

  componentDidMount() {
    // Extract access token from query parameters
    const urlParams = new URLSearchParams(window.location.search);
    const accessToken = urlParams.get('accessToken');

    // If access token is present, store it in local storage and set isAuthenticated to true
    if (accessToken) {
      localStorage.setItem('accessToken', accessToken);
      this.setState({ isAuthenticated: true }, () => {
        this.fetchEmails(); // Fetch emails after setting isAuthenticated
      });
    }
  }

  fetchEmails = async () => {
    try {
      const response = await axios.get('http://localhost:5000/emails', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`, // Send access token in the request header
        },
      });
      console.log("emails recieved ",response.data)
      this.setState({ emails: response.data, loading: false });
    } catch (error) {
      console.error('Error fetching emails:', error);
    }
  };

  handleFetchEmails = () => {
    this.fetchEmails();
  };

  render() {
    const { emails, loading, isAuthenticated } = this.state;

    return (
      <div>
        <h1>Emails</h1>
        {isAuthenticated && ( // Render the button only if isAuthenticated is true
          <button onClick={this.handleFetchEmails}>Fetch Emails</button>
        )}
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {emails.map((email) => (
              <li key={email.id}>{email.snippet}</li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export { Signin, EmailList };
