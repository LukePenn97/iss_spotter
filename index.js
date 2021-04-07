const {fetchMyIP, fetchCoordsByIP, fetchISS, nextISSTimes} = require('./iss');

fetchMyIP((error, ip) => {
  error ? console.log(error) : fetchCoordsByIP(ip, (error, geoData) => {
    error ? console.log(error) : fetchISS(geoData, (error, passTimes) => {
      error ? console.log(error) : nextISSTimes(passTimes, (error, times) => {
        error ? console.log(error) : console.log(times);
      });
    });
  });
});

