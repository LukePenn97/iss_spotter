const { fetchMyIP, fetchCoordsByIP, fetchISS, nextISSTimes } = require('./iss_promised');

fetchMyIP()
  .then(fetchCoordsByIP)
  .then(fetchISS)
  .then(nextISSTimes)
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });