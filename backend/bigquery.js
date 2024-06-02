const { BigQuery } = require('@google-cloud/bigquery');

// Path to your JSON key file
const keyFilename = './bigquery_connection.json';

// Create a client to access Google BigQuery using the key file
const bigquery = new BigQuery({ keyFilename });

// Example: Querying a dataset
async function queryData() {
    const query = 'SELECT * FROM `vertexai-424911.bqml_tutorial.Mails` LIMIT 10';
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
