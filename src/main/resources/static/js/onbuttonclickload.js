function drawDataInTable(){
fetch("/api/userlist").then(
		res=>{ res.json().then(
				
				data=>{
					//console.log(data);

					var trtdVar = "";
					
					data.forEach((u)=>{
						
						trtdVar += "<tr>";
						trtdVar += "<td>" + u.id+"</td>";
						trtdVar += "<td>" + u.username+"</td>";
						trtdVar += "<td>" + u.useremail+"</td>";
						trtdVar += "<td>" + u.useraddress+"</td><td><a href=\"#\" onclick=\"deleteUserById(" + u.id + ")\" class=\"btn btn-sm btn-danger delBtn\"\>X</a></td></tr>";
					})
					
					document.getElementById("appDataTable2").innerHTML = trtdVar;
					
				})
		}
	)
}

function deleteUserById(id) {
alert('Hello, you passed ID :: ' + id);

if (!confirm("Are you sure?")) 

return (null);

var url="/api/delete/user/" + id;
//function deleteUser(url, callback){
    var xmlhttp;
    // compatible with IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(){
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
        alert('success !');
            //callback(xmlhttp.responseText);
            drawDataInTable();
        }
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
//}
}
