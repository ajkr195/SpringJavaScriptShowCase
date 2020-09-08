async function getUsers() {
    let url = '/api/userlist';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function renderUsers() {
    let users = await getUsers();

    let html = '';
    users.map(user => {
        let htmlSegment = `<h6>${user.username} (${user.useraddress}) - 
                            <a href="email:${user.useremail}">${user.useremail}</a></h6>`;

        html += htmlSegment;
    });

    let divContainer = document.getElementById('someContainer');
    divContainer.innerHTML = "";
    divContainer.innerHTML = html;
}

renderUsers();


function drawHtmlTable() { 
fetch("/api/userlist").then( res=>{ res.json().then( data=> { JSONToHTMLTable( data , "drawHtmlTableHere"); })})
}



function JSONToHTMLTable(jsonData, elementToBind) {           

            //This Code gets all columns for header   and stored in array col
            var col = [];
            for (var i = 0; i < jsonData.length; i++) {
                for (var key in jsonData[i]) {
                    if (col.indexOf(key) === -1) {
                        col.push(key);
                    }
                }
            }

            //This Code creates HTML table
            var table = document.createElement("table");

            //This Code getsrows for header creader above.
            var tr = table.insertRow(-1);

            for (var i = 0; i < col.length; i++) {
                var th = document.createElement("th");
                th.innerHTML = col[i];
                tr.appendChild(th);
            }

            //This Code adds data to table as rows
            for (var i = 0; i < jsonData.length; i++) {

                tr = table.insertRow(-1);

                for (var j = 0; j < col.length; j++) {
                    var tabCell = tr.insertCell(-1);
                    tabCell.innerHTML = jsonData[i][col[j]];
                }
            }

            //This Code gets the all columns for header
            var divContainer = document.getElementById(elementToBind);
            divContainer.innerHTML = "";
            divContainer.appendChild(table);
}