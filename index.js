const {fetchMyIP, fetchCoordsByIP, fetchISS} = require('./iss');

fetchMyIP((error, ip) => {
  error ? console.log(error) : fetchCoordsByIP(ip, (error, geoData) => {
    error ? console.log(error) : fetchISS(geoData, (error, pos) => {
      error ? console.log(error) : console.log(pos);
    });
  });
});

