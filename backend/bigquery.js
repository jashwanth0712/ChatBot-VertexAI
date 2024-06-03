const { BigQuery } = require('@google-cloud/bigquery');

// Path to your JSON key file
const keyFilename = './bigquery_connection.json';

// Create a client to access Google BigQuery using the key file
const bigquery = new BigQuery({ keyFilename });

// Example: Querying a dataset
async function queryData() {
    // const query = 'SELECT * FROM `vertexai-424911.bqml_tutorial.Mails` LIMIT 10';
    // const query = 'Insert into `vertexai-424911.bqml_tutorial.Mails`  values ("jashwanth0712@gmail.com","saish@gmail.com","hi how are you","hi this is a sample mail to see your well being","haranspan@gmail.com");';
    const query = `
    INSERT INTO \`vertexai-424911.bqml_tutorial.Mails\`
VALUES 
  ("jashwanth0712@gmail.com", "saish@gmail.com", "Hello, how are you?", "Hi Saish, I hope this email finds you well. Just wanted to check in and see how you're doing. Let's catch up soon!", "haranspan@gmail.com",""),
  ("example1@gmail.com", "example2@gmail.com", "Meeting Reminder", "Dear Team, Just a friendly reminder that our weekly meeting is scheduled for tomorrow at 10 AM. Please make sure to attend. Thanks!", "example3@gmail.com",""),
  ("dummy1@gmail.com", "dummy2@gmail.com", "Invitation to the Webinar", "Hi there, You're invited to our upcoming webinar on 'Effective Time Management Strategies'. It's scheduled for next Friday at 2 PM. Register now to secure your spot!", "dummy3@gmail.com",""),
  ("random1@gmail.com", "random2@gmail.com", "Important Update: Project Deadline Extension", "Dear Team, Due to unforeseen circumstances, the deadline for Project Alpha has been extended by one week. Please adjust your schedules accordingly. Thank you for your understanding.", "random3@gmail.com",""),
  ("test1@gmail.com", "test2@gmail.com", "Feedback Request", "Hello, We hope you're enjoying using our product/service. We would greatly appreciate it if you could take a few moments to share your feedback with us. Your input is valuable to us. Thank you!", "test3@gmail.com",""),
  ("sample1@gmail.com", "sample2@gmail.com", "Job Application Confirmation", "Dear [Applicant Name], Thank you for applying for the [Job Title] position at [Company Name]. We have received your application and will review it carefully. We'll be in touch soon regarding the next steps in the recruitment process.", "sample3@gmail.com",""),
  ("mail1@gmail.com", "mail2@gmail.com", "Invoice Due Reminder", "Hi [Customer Name], This is a friendly reminder that Invoice #1234 is due for payment on [Due Date]. Please make the necessary arrangements to ensure timely payment. Let us know if you have any questions. Thank you!", "mail3@gmail.com",""),
  ("dummy4@gmail.com", "dummy5@gmail.com", "New Product Launch Announcement", "Hi Everyone, We're excited to announce the launch of our latest product, [Product Name]! Learn more about its features and benefits on our website. Place your order today and be one of the first to experience it!", "dummy6@gmail.com",""),
  ("example4@gmail.com", "example5@gmail.com", "Newsletter Subscription Confirmation", "Dear Subscriber, Thank you for subscribing to our newsletter. You will now receive regular updates on industry trends, product news, and exclusive offers. Stay tuned for our next edition!", "example6@gmail.com",""),
  ("random4@gmail.com", "random5@gmail.com", "Feedback on Recent Purchase", "Hi [Customer Name], We hope you're enjoying your recent purchase of [Product/Service]. We'd love to hear your thoughts and feedback on your experience. Feel free to reply to this email with any comments or suggestions. Thank you for choosing us!", "random6@gmail.com","");

    `
    
    //     const query = `
//   SELECT
//     ml_generate_text_result['predictions'][0]['content'] AS generated_text,
//     subject,
//     'from',
//     'to',
//     'cc',
//     'body'
//   FROM
//     ML.GENERATE_TEXT(
//       MODEL \`bqml_tutorial.llm_model\`,
//       (
//         SELECT
//           CONCAT('Generate the summary from the text below capture important points : ', body) AS prompt,
//           *
//         FROM
//           \`vertexai-424911.bqml_tutorial.Mails\`
//         LIMIT 5
//       ),
//       STRUCT(
//         0.2 AS temperature,
//         100 AS max_output_tokens
//       )
//     );
// `;
    const options = {
        query: query,
    };


    // Run the query
    const [rows] = await bigquery.query(options);

    // Process the query results
    console.log('Query Results:');
    rows.forEach(row => {
        console.log(row);
    });
}

// Call the function to execute the query
queryData();
