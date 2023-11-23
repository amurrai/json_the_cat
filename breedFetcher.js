const request = require('request');

const url = "https://api.thecatapi.com/v1/breeds/" 
const breed = process.argv[2]; 

request(url, (error, response, body) => {
  // request error handling
  if (error) { 
    console.log(error);
  }
  // parse JSON string into an object
  const data = JSON.parse(body);
  // search for input through the data array
  const found = data.find(({ name }) => name === breed);
  // handle case where breed is not found
  if (!found) {
    console.log("Breed not found!");
    return
  }
  console.log(found['description']);
});