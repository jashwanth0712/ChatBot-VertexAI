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
      {/* Left section */}
      <div className="flex flex-col items-center justify-center flex-1 text-white bg-gray-900">
        <div className="flex items-center mb-8">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm-2.47-9.12L9.3 9.47a1 1 0 001.4 0l1.77-1.77a1 1 0 111.4 1.42L10 11.41l-3.47-3.47a1 1 0 011.42-1.42l1.58 1.58z"
              clipRule="evenodd"
            />
          </svg>
          <span className="ml-2 text-2xl font-semibold">Acme Inc</span>
        </div>
      </div>

      {/* Right section */}
      <div className="flex items-center justify-center flex-1 bg-gray-800">
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
          <h2 className="mb-4 text-3xl font-bold text-center">Welcome to Acme Inc</h2>
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
