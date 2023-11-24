const url2 = 'http://127.0.0.1/FLAG';

// Fetch the text file
fetch(url2)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.text();
  })
  .then(data => {
    // Do something with the text content of the file
    console.log(data); // Output the content of the text file
  })
  .catch(error => {
    console.error('There was a problem fetching the text file:', error);
  });
