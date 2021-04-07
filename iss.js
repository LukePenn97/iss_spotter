const request = require("request");

const fetchMyIP = function(callback) {
  request('https://api.ipify.org?format=json', (error, response, body) => {
    if (response) {
      if (response.statusCode !== 200) {
        const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
        callback(Error(msg), null);
        return;
      }
    }
    const ip = JSON.parse(body).ip;
    callback(error, ip);
  });
};

const fetchCoordsByIP = (ip, callback) => {
  request(`https://freegeoip.app/json/${ip}`, (error, response, body) => {
    
    if (response) {
      if (response.statusCode !== 200) {
        const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
        callback(Error(msg), null);
        return;
      }
    }
    const obj = JSON.parse(body);
    const coords = {
      latitude: obj.latitude,
      longitude: obj.longitude
    };
    callback(error, coords);
  });
};

const fetchISS = (geoData, callback) => {
  request(`http://api.open-notify.org/iss-pass.json?lat=${geoData.latitude}&lon=${geoData.longitude}`, (error, response, body) => {
    
    if (response) {
      if (response.statusCode !== 200) {
        const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
        callback(Error(msg), null);
        return;
      }
    }
    //console.log(body);
    const obj = JSON.parse(body);
    callback(error, obj.response);
  });
};

module.exports = { fetchMyIP, fetchCoordsByIP, fetchISS };