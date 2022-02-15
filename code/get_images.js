const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event, context) => {
    return {
        statusCode: 200,
        body: JSON.stringify([]),
    };

};
