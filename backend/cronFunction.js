const { google } = require('googleapis');
const User = require('./models/user');
const { fetchEmails, formatEmails } = require('./utils/mail_handlers.js');
function printHi() {
  console.log('hi');
}
const fetchEmailsForAllUsers = async () => {
  try {
    const users = await User.find();
    console.log("users are ", users)
    for (const user of users) {
      const emails = await fetchEmails(user.accessToken, 20); // Fetch 5 emails for each user
      const formattedEmails = formatEmails(emails);
      console.log(`Emails for user ${user.email}:`, formattedEmails);
    }
  } catch (error) {
    console.error('Error fetching emails for all users:', error);
  }
};
module.exports = {printHi, fetchEmailsForAllUsers};
