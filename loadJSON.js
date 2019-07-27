function loadJSON(url, callback) { 

	var xmlHTTP = new XMLHttpRequest();

	xmlHTTP.overrideMimeType("application/json");
	xmlHTTP.open('GET', url, true);
	xmlHTTP.onreadystatechange = function () {

		if (xmlHTTP.readyState == 4 && xmlHTTP.status == "200") {

			callback(xmlHTTP.responseText);

		}

	};

	xmlHTTP.send(null); 

}
