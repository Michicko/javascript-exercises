const convertToCelsius = function(temperatureInFahrenheit ) {
  // Formula to convert from Fahrenheit to Celsius
  const convertedTemperature =  (temperatureInFahrenheit - 32) * 5/9;
  return +convertedTemperature.toFixed(1);
};

const convertToFahrenheit = function(temperatureInCelsius) {
   // Formula to convert from Celsius to from Fahrenheit
   const convertedTemperature = (temperatureInCelsius * 9/5) + 32;
   return +convertedTemperature.toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
