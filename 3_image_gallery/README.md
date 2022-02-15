# Finishing up the gallery

The only thing that's left, is showing the uploaded images in the `Gallery` tab.

## Build the final endpoint

The UI expects a `GET /images` call that returns a list of URLs to images. The DynamoDB equivalent
of a `SELECT * FROM images` is the [Scan operation](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB/DocumentClient.html#scan-property).
Implement [get_images.js](../code/get_images.js) to return a list of image URLs.

<details>
  <summary>View solution</summary>

```yaml
functions:
  getImages:
    handler: code/get_images.handler
    events:
      - httpApi:
          method: GET
          path: /images
```

```javascript
const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event, context) => {
    let {Items: items} = await dynamodb.scan({TableName: "axxes-picasa-dev"}).promise();

    let images = items.map(item => {
        return `https://axxes-picasa-dev-images-vsr52e38two6.s3.eu-west-1.amazonaws.com/${item.id}.png`
    });

    return {
        statusCode: 200,
        body: JSON.stringify(images),
    };

};
```

</details>

### Test the gallery

Navigate to the **Gallery** tab, it should show all your uploaded images.
