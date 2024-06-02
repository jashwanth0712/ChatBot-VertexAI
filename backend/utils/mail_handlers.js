const { google } = require('googleapis');

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

module.exports = { fetchEmails, formatEmails };
