import React from 'react';
import axios from 'axios';

class Signin extends React.Component {
  handleSignin = () => {
    window.location.href = 'http://localhost:5000/auth/google'; // Redirect to the backend server for Google OAuth
  };

  render() {
    return (
      <div>
        <h1>Signin with Google</h1>
        <button onClick={this.handleSignin}>Sign in with Google</button>
      </div>
    );
  }
}

class EmailList extends React.Component {
  state = {
    emails: [],
    loading: true,
  };

  componentDidMount() {
    this.fetchEmails();
  }

  fetchEmails = async () => {
    try {
      const response = await axios.get('http://localhost:5000/emails');
      this.setState({ emails: response.data, loading: false });
    } catch (error) {
      console.error('Error fetching emails:', error);
    }
  };

  render() {
    const { emails, loading } = this.state;

    return (
      <div>
        <h1>Emails</h1>
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
