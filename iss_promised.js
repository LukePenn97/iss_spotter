const request = require('request-promise-native');

const fetchMyIP = function() {
  return request('https://api.ipify.org?format=json');
};

const fetchCoordsByIP = function(body) {
  const ip = JSON.parse(body).ip;
  return request(`https://freegeoip.app/json/${ip}`);
};

const fetchISS = (body) => {
  const { latitude, longitude } = JSON.parse(body);
  return request(`http://api.open-notify.org/iss-pass.json?lat=${latitude}&lon=${longitude}`)
};

const nextISSTimes = (body) => {
  const passTimes = JSON.parse(body).response;
  for (const times of passTimes) {
    let date = new Date(Number(times.risetime * 1000));
    console.log(`Next Pass at ${date} for ${times.duration} seconds!`);
  }
}

module.exports = { fetchMyIP , fetchCoordsByIP, fetchISS, nextISSTimes };