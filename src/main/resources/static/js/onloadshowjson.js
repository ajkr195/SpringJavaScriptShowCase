let xhr = new XMLHttpRequest();
xhr.open('get', '/api/userlist');
xhr.send();
xhr.onload = function() {
    alert(xhr.response);
};