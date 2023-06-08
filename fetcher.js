const request = require('request');
const fs = require('fs');

const targetUrl = 'https://example.edu/';
const myPath = "./index.html";

const fetch = (url, localPath) => {
  request(targetUrl, (error, response, body) => {
    console.error('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    let fileSize = 0;
    while (fileSize < body.length) {
      fileSize++;
    }
    fs.writeFile(localPath, body, err => {
      if (err) {
        console.error(err);
      } else {
        console.log(`Downloaded and saved ${fileSize} bytes to ${myPath}`);
      }
      // file written successfully
    });
  });
};

fetch(targetUrl, myPath);