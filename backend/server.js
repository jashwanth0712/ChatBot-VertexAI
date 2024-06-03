const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const { google } = require('googleapis');
const session = require('express-session');
const cors = require('cors');
const cron = require('node-cron');
const {printHi,fetchEmailsForAllUsers} = require('./cronFunction');
const User = require('./models/user');
require('dotenv').config(); // Load environment variables from .env file

const mongoose = require('mongoose');
cron.schedule('*/600 * * * * *', printHi);
cron.schedule('*/15 * * * * *', fetchEmailsForAllUsers);

mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(err => console.error('Error connecting to MongoDB Atlas:', err));



const app = express();

// CORS middleware
app.use(cors());

app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: false
}));


// Inside Passport callback
passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: '/auth/google/callback'
  // Strategy configuration...
}, async (accessToken, refreshToken, profile, done) => {
  try {
    let user = await User.findOne({ email: profile.emails[0].value });

    if (!user) {
      user = new User({
        email: profile.emails[0].value,
        accessToken,
        firstName: profile.name.givenName,
        lastName: profile.name.familyName
      });
      await user.save();
    } else {
      user.accessToken = accessToken;
      await user.save();
    }

    return done(null, user);
  } catch (err) {
    return done(err);
  }
}));


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
  passport.authenticate('google', { scope: ['profile', 'email', 'https://www.googleapis.com/auth/gmail.readonly'] ,accessType: 'offline', prompt: 'consent'})

);
app.get('/',(req,res)=>{
  res.send("hello");
}
);
const m=[
  {
      "subject": "New comment in Season of AI",
      "from": "XMonkeys360 <info@meetup.com>",
      "to": "cs20b1007@iiitdm.ac.in",
      "cc": null,
      "body": "Meetup New Comments Season of AI with XMonkeys360 See 1 earlier comment Anbu Mani 2:06 PM Yes, Sorry for the inconvenience Like · Reply View conversation on Meetup Never miss a last-minute change. Get"
  },
  {
      "subject": "Become a part of Tech Affairs - Recruitment",
      "from": "SAC-Technical Affairs <technical.affairs@iiitdm.ac.in>",
      "to": "Students of IIITDM <students@iiitdm.ac.in>",
      "cc": "Dean Student Affairs <dean-sa@iiitdm.ac.in>, pic-technical@iiitdm.ac.in",
      "body": "Warm Greetings, Moving forward to the new academic year 2024-25, we are glad to share that the Technical Affairs team is scaling up, and we are looking to get onboard with keen and dedicated people"
  },
  {
      "subject": "10% off with 6Exclusive Fare 💰",
      "from": "IndiGo <mailers@marketing.goindigo.in>",
      "to": "<cs20b1007@iiitdm.ac.in>",
      "cc": null,
      "body": "Book on IndiGo&#39;s web or app now 📱 If you are unable to view this message correctly, click here 6E Rewards | Get Inspired | Hello 6E | Super 6E | Web Check-in Top Destinations | Travel International"
  },
  {
      "subject": "1000 students applied for these jobs in the last 1 hour!",
      "from": "Team Unstop <noreply@jobs.unstop.news>",
      "to": "cs20b1007@iiitdm.ac.in",
      "cc": null,
      "body": "Tap here to apply! ﻿ ͏ ﻿ ͏ ﻿ ͏ ﻿ ͏ ﻿ ͏ ﻿ ͏ ﻿ ͏ ﻿ ͏ ﻿ ͏ ﻿ ͏ ﻿ ͏ ﻿ ͏ ﻿ ͏ ﻿ ͏ ﻿ ͏ ﻿ ͏ ﻿ ͏ ﻿ ͏ ﻿ ͏ ﻿ ͏ ﻿ ͏ ﻿ ͏ ﻿ ͏ ﻿ ͏ ﻿ ͏ ﻿ ͏ ﻿ ͏ ﻿ ͏ ﻿ ͏ ﻿ ͏ ﻿ ͏ ﻿ ͏ ﻿ ͏ ﻿ ͏ ﻿ ͏ ﻿ ͏ ﻿ ͏ ﻿ ͏ ﻿ ͏ ﻿ ͏ ﻿ ͏ ﻿ ͏ ﻿ ͏ ﻿ ͏ ﻿ ͏ ﻿"
  },
  {
      "subject": "New comment in Season of AI",
      "from": "XMonkeys360 <info@meetup.com>",
      "to": "cs20b1007@iiitdm.ac.in",
      "cc": null,
      "body": "Meetup New Comments Season of AI with XMonkeys360 Vivek Dharmarajan 11:34 PM Have we moved the meetup to Jun 29? Like · Reply View conversation on Meetup Never miss a last-minute change. Get the app."
  }
]

app.get("/mails",(req,res)=>{
  res.send(m)
})
app.post("/mails",(req,res)=>{
  res.send(m)
})
app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
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
