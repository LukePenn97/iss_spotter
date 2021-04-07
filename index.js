const {fetchMyIP, fetchCoordsByIP} = require('./iss');

fetchMyIP((error, ip) => {
  error ? console.log(error) : fetchCoordsByIP(ip, (error, geoData) => {
    error ? console.log(error) : console.log(geoData);
  });
});
