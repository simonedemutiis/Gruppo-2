// function onSend() {
//   var requestURL = "https://jsonplaceholder.typicode.com/users";
//   let request = new XMLHttpRequest();
//   request.open("GET", requestURL, true);
//   request.responseType = "json";
//   request.send();
// }

// onSend();

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((json) => console.log(json));
