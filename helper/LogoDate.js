const NepaliDate = require("nepali-date");
export const LogoDate = () => {
  // date convertor for top logo bar
  let todaysDate = new Date();
  const mydate = new NepaliDate(new Date(todaysDate));
  let nepali = mydate.format("d mmmm  yyyy, dddd");
  let nepaliDate = nepali.replace("बैशाख", "वैशाख");
  let year = todaysDate.getFullYear();
  let month = todaysDate.getMonth();
  let date = todaysDate.getDate();
  let day = todaysDate.getDay();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const days = [
    "Sunday",
    "Monday",
    "Tueday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  // const monthIndex = d.getMonth();
  const monthName = months[month];
  const dayName = days[day]; // Thu
  const formatted = ` ${date} ${monthName} ${year}, ${dayName} `;

  // let month = todaysDate.getMonth();
  // १३ वैशाख २०७७, शनिबार
  return `${formatted} / ${nepaliDate}`;
};
