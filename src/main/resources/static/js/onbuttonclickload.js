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
						trtdVar += "<td>" + u.useraddress+"</td></tr>";
					})
					
					document.getElementById("appDataTable2").innerHTML = trtdVar;
					
				})
		}
	)
}