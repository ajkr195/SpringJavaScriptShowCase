function userIdBasedDetails(){
fetch("/api/userlist").then(
		res=>{ res.json().then(
				
				data=>{
					//console.log(data);

					var trtdVar = "";
					var selElement = document.getElementById('select3');
					
					document.getElementById("select3").innerHTML = "";
					
					alert('User ID(s) populated in the dropdown !');
					
					selElement.innerHTML = selElement.innerHTML + '<option value="" selected disabled>- Select -</option>';
					data.forEach((u)=>{
					
					
					 selElement.innerHTML = selElement.innerHTML +
            			'<option value="' + u.id + '">' + u.username + '</option>';
					})
					
					document.addEventListener('input', function(event) {
						if (event.target.id !== 'select3')
							return;
						
						alert("Fetching User details for USER-ID :: " + event.target.value + ". Using URL - /api/user/"+ event.target.value);
						
						getUserDetails(event.target.value);
						

					}, false);
					
				})
		}
	)
}


function getUserDetails(id){
fetch("/api/user/"+ id).then(
		res=>{ res.json().then(
				
				data=>{
					//console.log(data);

					var trtdVar = "";
					trtdVar += "<tr>";
					trtdVar += "<td>" + data.id+"</td>";
					trtdVar += "<td>" + data.username+"</td>";
					trtdVar += "<td>" + data.useremail+"</td>";
					trtdVar += "<td>" + data.useraddress+"</td></tr>";
					
					document.getElementById("dynaDataTable").innerHTML = trtdVar;
					
				})
		}
	)
}


