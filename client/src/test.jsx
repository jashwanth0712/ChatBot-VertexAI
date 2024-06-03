import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Loading from './components/ui/loading.jsx';
import { motion } from 'framer-motion'; 


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
      <div className="flex min-h-screen">
         {/* Right section */}
      <div className="flex items-center justify-center flex-1 bg-gray-800">
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
          <h2 className="mb-4 text-3xl font-bold text-center text-gray-800">Welcome to Jarvis</h2>
          <p className="mb-6 text-center text-gray-600">
            Sign in with your email or Google account to continue.
          </p>
          <div className="space-y-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to={"/"}>
                <button
                  className="w-full px-4 py-2 text-sm font-medium text-white bg-black border border-transparent rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Sign In with Email
                </button>
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                onClick={this.handleSignin}
                className="w-full px-4 py-2 text-sm font-medium text-black bg-white border border-black rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign in with Google
              </button>
            </motion.div>
          </div>
        </div>
      </div>
      {/* Left section */}
      

     
    </div>
    );
  }
}

const EmailList = () => {
  const [emails, setEmails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Extract access token from query parameters
    const urlParams = new URLSearchParams(window.location.search);
    const accessToken = urlParams.get('accessToken');

    // If access token is present, store it in local storage and set isAuthenticated to true
    if (accessToken) {
      localStorage.setItem('accessToken', accessToken);
      setIsAuthenticated(true);
      
      // Show loading for 2 seconds before navigating
      setShowLoading(true);
      setTimeout(() => {
        setShowLoading(false);
        navigate('/Dashboard');
      }, 2000);
    }
  }, [navigate]);

  const fetchEmails = async () => {
    try {
      const response = await axios.get('http://localhost:5000/emails', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`, // Send access token in the request header
        },
      });
      console.log("emails received ", response.data);
      setEmails(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching emails:', error);
    }
  };

  const handleFetchEmails = () => {
    fetchEmails();
  };

  return (
    <div>
      {showLoading ? (
        <Loading />
      ) : (
        <>
          <h1>Emails</h1>
          {isAuthenticated && ( // Render the button only if isAuthenticated is true
            <button onClick={handleFetchEmails}>Fetch Emails</button>
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
        </>
      )}
    </div>
  );
};

export { Signin, EmailList };
