const url = 'http://website-mbhwad.inst.malicecyber.com/FLAG';

// Fetch the text file
fetch(url)
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
