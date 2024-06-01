const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const { google } = require('googleapis');
const session = require('express-session');
const cors = require('cors');

require('dotenv').config(); // Load environment variables from .env file

const app = express();

// CORS middleware
app.use(cors());

app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: false
}));

// Passport configuration
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: '/auth/google/callback'
  },
  (accessToken, refreshToken, profile, done) => {
    // You can save the user profile to your database here
     profile.accessToken = accessToken; // Add access token to profile
    profile.refreshToken = refreshToken;
    return done(null, profile);
  }
));

// Serialize user
passport.serializeUser((user, done) => {
  done(null, user);
});

// Deserialize user
passport.deserializeUser((obj, done) => {
  done(null, obj);
});

// Initialize Passport
app.use(passport.initialize());

// Routes
app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email', 'https://www.googleapis.com/auth/gmail.readonly'] })

);

app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    //TODO:[Dhanvanth] on signin store the access token and mail in Mongodb
    // Redirect with tokens as query parameters
    res.redirect(`http://localhost:5173/emails/?accessToken=${req.user.accessToken}&refreshToken=${req.user.refreshToken}`);
  }
);


// Retrieve emails
// Function to fetch emails
const fetchEmails = (accessToken, numberOfEmails) => {
  return new Promise((resolve, reject) => {
    const oauth2Client = new google.auth.OAuth2();
    oauth2Client.setCredentials({
      access_token: accessToken,
    });

    const gmail = google.gmail({ version: 'v1', auth: oauth2Client });

    gmail.users.messages.list({
      userId: 'me',
      maxResults: numberOfEmails
    }, (err, response) => {
      if (err) {
        console.error('Error fetching emails:', err);
        reject(err);
      } else {
        const messages = response.data.messages;
        const promises = messages.map(message => {
          return new Promise((resolve, reject) => {
            gmail.users.messages.get({
              userId: 'me',
              id: message.id,
              format: 'full' // Get the full message details
            }, (err, messageResponse) => {
              if (err) {
                reject(err);
              } else {
                resolve(messageResponse.data);
              }
            });
          });
        });
        Promise.all(promises)
          .then(emails => resolve(emails))
          .catch(error => reject(error));
      }
    });
  });
};

// Function to format emails
const formatEmails = (emails) => {
  return emails.map(email => {
    const headers = email.payload.headers;
    console.log("headers are : ",headers)
    const subject = headers.find(header => header.name === 'Subject').value;
    const from = headers.find(header => header.name === 'From').value;
    const to = headers.find(header => header.name === 'To').value;
    const cc = headers.find(header => header.name === 'Cc') ? headers.find(header => header.name === 'Cc').value : null;
    const body = email.snippet; // Use snippet as an example, you can fetch the full body if needed

    return {
      subject,
      from,
      to,
      cc,
      body
    };
  });
};

// Retrieve emails
app.get('/emails', async (req, res) => {
  const accessToken = req.headers.authorization.split(' ')[1]; // Extract access token from request header
  const numberOfEmails = 5; // Number of emails to fetch

  try {
    const emails = await fetchEmails(accessToken, numberOfEmails);
    const formattedEmails = formatEmails(emails);
    res.json(formattedEmails);
  } catch (error) {
    console.error('Error fetching emails:', error);
    res.status(500).send('Error fetching emails');
  }
});


// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
