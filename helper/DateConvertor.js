const NepaliDate = require("nepali-date");
export const dateConvertor = date => {
  // converting the date and time to nepali date and time
  const mydate = new NepaliDate(new Date(date));
  let postDate = mydate.format("yyyy mmmm   d गते, dddd");
  // var hours = mydate.getHours() % 12 || 12;
  var hours = mydate.getHours();
  var minutes = mydate.getMinutes();
  let hou;
  let mins;
  let hour;
  let minu;
  let zero = "०";
  hou = convertToNepaliDigit(hours);
  hour = hou;
  if (hou.length === 1) {
    hour = zero.concat(hou);
  }
  mins = convertToNepaliDigit(minutes);
  minu = mins;
  if (mins.length === 1) {
    minu = zero.concat(mins);
  }
  let last;
  if (mydate.getHours() > 12) {
    last = "PM";
  } else {
    last = "AM";
  }

  let finaldate = `${postDate} ${hou}:${minu} `;
  return finaldate;
};

function convertToNepaliDigit(number) {
  var number = number.toString();
  var sliced = [];
  var numberLength = number.length;
  var nepali_digits = ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"];
  for (var i = 0; i < numberLength; i++) {
    sliced.push(nepali_digits[number.substr(number.length - 1)]);
    number = number.slice(0, -1);
  }
  return sliced.reverse().join("").toString();
}
