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
  SELECT
    ml_generate_text_result['predictions'][0]['content'] AS generated_text,
    subject,
    'from',
    'to',
    'cc',
    'body'
  FROM
    ML.GENERATE_TEXT(
      MODEL \`bqml_tutorial.llm_model\`,
      (
        SELECT
          CONCAT('Generate the summary from the text below capture important points : ', body) AS prompt,
          *
        FROM
          \`vertexai-424911.bqml_tutorial.Mails\`
        LIMIT 5
      ),
      STRUCT(
        0.2 AS temperature,
        100 AS max_output_tokens
      )
    );
`;
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
