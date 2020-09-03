document.addEventListener('input', function(event) {
		if (event.target.id !== 'select1')
			return;

		// Selected value
		alert("select1 value :: " + event.target.value);
		//console.log(event.target.value);

		// Selected option's Index
		alert(event.target.selectedIndex);
		console.log(event.target.options[event.target.selectedIndex]);

}, false);