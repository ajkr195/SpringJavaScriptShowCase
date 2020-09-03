function loadAndShowJSON() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("showJSONDataHere").innerHTML =
      this.responseText;
      var myBooks = this.responseText;
      
      alert(myBooks);
      
      
      
    }
  };
  xhttp.open("GET", "/api/userlist", true);
  xhttp.send();
}