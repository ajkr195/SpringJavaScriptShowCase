async function getUsers() {
    let url = '/api/userlist';
    try {
        let response = await fetch(url);
        
        //if (response.status !== 200) {
        //	alert('Looks like there is a problem. Status Code: ' + response.status );
        //	return;
      	//}
      	//let data = await response.text();
      	//alert( 'data :: ' + data  );
      	
      	//if (response.status === 200) {
      	// 	alert('response.headers.get(\'Content-Type\') :: ' + response.headers.get('Content-Type'));
    	//	alert('response.headers.get(\'Date\') :: ' + response.headers.get('Date'));
    	//	alert('response.status :: ' + response.status);
    	//	alert('response.statusText :: ' + response.statusText);
    	//	alert('response.type :: ' + response.type);
    	//	alert('response.url :: ' + response.url);
      	//}
      	
        
        return await response.json();
        
    } catch (error) {
        console.log(error);
        alert(error);
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



async function displayUsers() {
    let users = await getUsers();
    
    var htmltabletdtrdata = "";
					
	users.forEach((theuser)=>{
		htmltabletdtrdata += "<tr>";
		htmltabletdtrdata += "<td>" + theuser.id+"</td>";
		htmltabletdtrdata += "<td>" + theuser.username+"</td>";
		htmltabletdtrdata += "<td>" + theuser.useremail+"</td>";
		htmltabletdtrdata += "<td>" + theuser.useraddress+"</td></tr>";
	})
	
	document.getElementById("userDataTable").innerHTML = htmltabletdtrdata;
    
}

