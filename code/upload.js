const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient();
const s3 = new AWS.S3();

const uuid = () => Math.random().toString(26).slice(2);

exports.handler = async (event, context) => {
    return {
        statusCode: 200,
        headers: {"content-type": "application/json"},
        body: JSON.stringify({
            image: {} // Return your image object back to the client. Makes it easier to validate
        }),
    };
};
