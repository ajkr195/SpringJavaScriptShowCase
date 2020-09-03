document.addEventListener("DOMContentLoaded", function() {
		alert('DOM ready !');
		
		var button = document.getElementById('disableThisButton');
		button.disabled = true;
		
		checkCookie();
		
		setCookie
		function setCookie(name, value, daysToLive) {
			var cookie = name + "=" + encodeURIComponent(value);

			if (typeof daysToLive === "number") {
				cookie += "; max-age=" + (daysToLive * 24 * 60 * 60);

				document.cookie = cookie;
			}
		}

		function getCookie(name) {
			var cookieArr = document.cookie.split(";");
			for (var i = 0; i < cookieArr.length; i++) {
				var cookiePair = cookieArr[i].split("=");
				if (name == cookiePair[0].trim()) {
					return decodeURIComponent(cookiePair[1]);
				}
			}
			return null;
		}

		function checkCookie() {
			// Get cookie using our custom function
			var firstName = getCookie("firstName");

			if (firstName != null) {
				alert("Welcome again, " + firstName);
			} else {
				firstName = prompt("Please enter your first name:");
				if (firstName != "" && firstName != null) {
					// Set cookie using our custom function
					setCookie("firstName", firstName, 1);
				}
			}
		}

});