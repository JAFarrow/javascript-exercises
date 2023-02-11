const convertToCelsius = function(temp) {
  celTemp = (temp - 32) * (5/9);
  return Math.round(celTemp * 10) / 10;
};

const convertToFahrenheit = function(temp) {
  fahTemp = (temp * (9/5) + 32);
  return Math.round(fahTemp * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

