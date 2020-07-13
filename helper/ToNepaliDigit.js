export const ToNepaliDigit = number => {
  var number = number.toString(); // '1234'
  var sliced = [];
  var numberlen = number.length; //4
  var nepali_digits = ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"];
  for (var i = 0; i < numberlen; i++) {
    sliced.push(nepali_digits[number.substr(number.length - 1)]);
    number = number.slice(0, -1);
  }
  return sliced.reverse().join("").toString();
};
