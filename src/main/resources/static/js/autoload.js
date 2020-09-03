fetch("/api/userlist").then(
		res=>{res.json().then(
				data=>{
					
					//console.log(data);
					
					var temp = "";
					
					data.forEach((u)=>{
						
						temp += "<tr>";
						temp += "<td>" + u.id+"</td>";
						temp += "<td>" + u.username+"</td>";
						temp += "<td>" + u.useremail+"</td>";
						temp += "<td>" + u.useraddress+"</td></tr>";
						
					})
					document.getElementById("appDataTable1").innerHTML = temp;
				})
		}
	)
