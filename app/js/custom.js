function initializeWidget() {
	/*
	 * Subscribe to the EmbeddedApp onPageLoad event before initializing the widget 
	 */
	ZOHO.embeddedApp.on("PageLoad", function (data) {

		/*
		   * Verify if EntityInformation is Passed 
		   */
		if (data && data.Entity) {
			/*
			   * Fetch Information of Record passed in PageLoad
			   * and insert the response into the dom
			   */
			ZOHO.CRM.API.getRecord({ Entity: data.Entity, RecordID: data.EntityId })
				.then(function (response) {

					document.getElementById("recordInfo").innerHTML = JSON.stringify(response, null, 2);
				});
		}

		/*
		 * Fetch Current User Information from CRM
		 * and insert the response into the dom
		 */
		ZOHO.CRM.CONFIG.getCurrentUser()
			.then(function (response) {
				document.getElementById("userInfo").innerHTML = JSON.stringify(response, null, 2);
			});

	})
	/*
	 * initialize the widget.
	 */

	// My Own Implementation Code
	// ------------------------------------------------------------------------------------------
	// ------------------------------------------------------------------------------------------
	// ------------------------------------------------------------------------------------------
	// ------------------------------------------------------------------------------------------
	// ------------------------------------------------------------------------------------------
	

	console.clear();
	console.log("widget_testing");
	console.log("_____________________");
	//document.getElementById("grandtotal").innerHTML = "document is working properly.";

	url = "https://www.zohoapis.in/crm/v2/functions/test1/actions/execute?auth_type=apikey&zapikey=1003.73537686ad12f499d4992c72edbadf50.1cc3ecfcac84ea35e128e51fd6dc1cb4";
	req = httpGet(url);

	status_code = req[0];
	req_text = req[1];

	const obj = JSON.parse(req_text);
	Grand_Total = obj.details.output;

	console.log(status_code);
	console.log(req_text);
	console.log(Grand_Total);
	document.getElementById("grandtotal").innerHTML += "\nStatus Code: " + status_code + " ";
	document.getElementById("grandtotal").innerHTML += "\nMessage : " + req_text;
	document.getElementById("grandtotal").innerHTML += "\n  \nGrand Grand_Total: " +Grand_Total;


	function httpGet(theUrl, access_token) {
		var xmlHttp = new XMLHttpRequest();
		xmlHttp.open("GET", theUrl, false); // false for synchronous request
		xmlHttp.send(null);

		return [xmlHttp.status, xmlHttp.responseText];
	}

	// --------------------------------------------------------------------------------------------------------------
	// ------------------------------------------------------------------------------------------
	// ------------------------------------------------------------------------------------------
	// ------------------------------------------------------------------------------------------
	// ------------------------------------------------------------------------------------------
	// ------------------------------------------------------------------------------------------

	ZOHO.embeddedApp.init();
}