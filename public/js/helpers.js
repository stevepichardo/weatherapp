const moment = require('moment');

const conversionFahrenheit = kelvin => {
  return Math.floor((kelvin - 273.15) * (9 / 5) + 32);
};

const getCurrentTime = () => {
  return moment().format('h:mm a');
};

module.exports = {
  conversionFahrenheit,
  getCurrentTime
};
