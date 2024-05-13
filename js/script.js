function getDateTimeFromDob() {
  var feb29_2024 = new Date(2024, 1, 29, 15, 0, 0);
  var currentDate = new Date();
  var difference = currentDate - feb29_2024;
  var seconds = Math.floor(difference / 1000);
  var days = Math.floor(seconds / (3600 * 24));
  seconds -= days * 3600 * 24;
  var hours = Math.floor(seconds / 3600);
  seconds -= hours * 3600;
  var minutes = Math.floor(seconds / 60);
  seconds -= minutes * 60;
  var age = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
  return age;
}

document.getElementsByClassName('ava-age-val')[0].innerHTML = getDateTimeFromDob();
setInterval(() => {
  document.getElementsByClassName('ava-age-val')[0].innerHTML = getDateTimeFromDob();
}, 1000)
