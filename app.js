const time = document.getElementById("time");
const period = document.getElementById("period");
const phases = document.getElementById("phases");
const heading = document.getElementById("heading");
const day = document.getElementById("day");

heading.innerHTML = "! Your Digital Clock !";

setInterval(() => {
  //   Date -- Day
  const date = new Date();
  let getDay = date.getDay();
  let daylist = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday ",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  day.innerHTML = daylist[getDay];
  //   Time--
  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();

  //   conditions --
  if (hour < 12) {
    period.innerHTML = "AM";
  } else {
    period.innerHTML = "PM";
  }

  if (hour < 10) {
    hour = "0" + hour;
  }

  if (min < 10) {
    min = "0" + min;
  }

  if (sec < 10) {
    sec = "0" + sec;
  }

  // Time phase conditionals --

  if (hour < 12) {
    phases.innerHTML = "!Good Morning!";
  }
  if (hour >= 12) {
    phases.innerHTML = "!Good Afternoon";
  }
  if (hour >= 18) {
    phases.innerHTML = "!Good Evening!";
  }
  if (hour == 22) {
    phases.innerHTML = "!Good Night!";
  }

  time.innerHTML = hour + " " + ":" + " " + min + " " + ":" + " " + sec;
});
