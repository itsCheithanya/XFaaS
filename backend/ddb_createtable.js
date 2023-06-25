// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region 
const region = "ap-south-1"; 
AWS.config.update({region});
// Create an instance of the DynamoDB class
const dynamodb = new AWS.DynamoDB();

// Call the listTables method to retrieve the table names
dynamodb.listTables({}, (err, data) => {
  if (err) {
    console.error('Error listing tables:', err);
    console.error('Error message:', err.message);

  } else {
    const tableCount = data.TableNames.length;
    console.log('Number of tables:', tableCount);
  }
});
