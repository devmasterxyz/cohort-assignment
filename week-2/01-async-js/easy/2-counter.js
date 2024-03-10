// Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

// (Hint: setTimeout);

function getLocalTime() {
  console.clear();
  console.log(new Date().toLocaleTimeString());
  setTimeout(getLocalTime, 1000);
}
getLocalTime();
