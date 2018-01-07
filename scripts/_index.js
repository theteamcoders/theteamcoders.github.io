if (!location.href.startsWith(window.location.origin + window.location.pathname + '#/'))
  location.href = window.location.origin + window.location.pathname + '#/Home';

const request = p => new Promise((resolve, reject) => {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      resolve(this.responseText);
    } else if (this.readyState == 4 && [ 404, 403 ].indexOf(this.status) !== -1)
    {
      reject(this.status);
    }
  };
  xhttp.open("GET", p, true);
  xhttp.send();
});