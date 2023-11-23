const request = require('request');

const url = "https://api.thecatapi.com/v1/breeds/";

const fetchBreedDescription = function(breedName, callback) {
  request(url, (error, response, body) => {
    // request error handling
    if (error) {
      callback(error, null);
    }
    // parse JSON string into an object
    const data = JSON.parse(body);
    // search for input through the data array
    const found = data.find(({ name }) => name === breedName);
    // handle case where breed is not found
    if (!found) {
      callback(null, "Breed not found!");
      return;
    }
    callback(null, found['description']);
  });
};

module.exports = { fetchBreedDescription };