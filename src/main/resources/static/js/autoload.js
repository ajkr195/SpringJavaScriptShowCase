fetch("/api/userlist").then(
		res=>{res.json().then(
				data=>{
					//console.log('data');
					//console.log(data);
					
					var parsedStringiFy = JSON.stringify(data);
					
					//console.log('parsedStringiFy');
					alert ('parsedStringiFy');
					alert (parsedStringiFy);
					
					var parsed = JSON.parse(parsedStringiFy);
					
					//alert ( 'JSON Data is :: ' + parsed);
					
					
					//for (let key in parsed) {
  					//	console.log("KEY: " + key);
  					//	console.log("VALUE: " + parsed[key]);
					//}
					
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
