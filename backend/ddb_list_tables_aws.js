// // Load the AWS SDK for Node.js
// var AWS = require('aws-sdk');
// // Set the region 
// const region = "ap-south-1"; 
// AWS.config.update({region});
// // Create an instance of the DynamoDB class
// const dynamodb = new AWS.DynamoDB();

// // Call the listTables method to retrieve the table names
// dynamodb.listTables({}, (err, data) => {
//   if (err) {
//     console.error('Error listing tables:', err);
//     console.error('Error message:', err.message);

//   } else {
//     console.log(data)
//     const tableCount = data.TableNames.length;
//     console.log('Number of tables:', tableCount);
//   }
// });
// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');

// Set the region
const region = "ap-south-1";
AWS.config.update({ region });

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

    // Iterate over each table
    data.TableNames.forEach((tableName, index) => {
      console.log(`Table name: ${tableName}`);

      // Perform a scan operation on the table
      const scanParams = {
        TableName: tableName,
      };

      dynamodb.scan(scanParams, (err, scanData) => {
        if (err) {
          console.error(`Error scanning table ${tableName}:`, err);
          console.error('Error message:', err.message);
        } else {
          console.log(`Table ${tableName} contents:`, scanData.Items);
        }

        // Check if all tables have been processed
        if (index === tableCount - 1) {
          console.log('Finished scanning all tables.');
        }
      });
    });
  }
});
