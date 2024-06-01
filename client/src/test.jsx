import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { Button } from "./components/ui/button.jsx"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./components/ui/card.jsx"
import Input from "./components/ui/input.jsx"
import { Label } from "./components/ui/label.jsx"


class Signin extends React.Component {
  handleSignin = () => {
    window.location.href = 'http://localhost:5000/auth/google'; // Redirect to the backend server for Google OAuth
  };

  render() {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="m@example.com" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" required />
          </div>
        </CardContent>
        <Link to={"./Dashboard"}> 
        <CardFooter>
          <Button className="w-full" >
            Sign In
          </Button>
         </CardFooter>
        </Link>

        <Link to={"./Dashboard"}> 
        <CardFooter>
        <Button className="w-full">
        <button onClick={this.handleSignin}>Sign in with Google</button>
        </Button>
         </CardFooter>
        </Link>
       </Card>
    </div>
    )
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
