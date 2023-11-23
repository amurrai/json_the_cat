const request = require('request');

const url = "https://api.theceatapi.com/v1/breeds/" 
const breed = process.argv[2]; 

request(url, (error, response, body) => {
  if (error) {
    console.error(error);
  }

  const data = JSON.parse(body);
  const found = data.find(({ name }) => name === breed);
  if (!found) {
    console.log("Breed not found!");
    return
  }
  console.log(found['description']);
});