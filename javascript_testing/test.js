console.clear();

//----make sure xmlhttprequest is installed in the local directoryy
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest

//url = "https://www.google.com/";
url = "https://www.zohoapis.in/crm/v2/functions/test1/actions/execute?auth_type=apikey&zapikey=1003.73537686ad12f499d4992c72edbadf50.1cc3ecfcac84ea35e128e51fd6dc1cb4";
req = httpGet(url);

status_code = req[0];
req_text = req[1];

const obj = JSON.parse(req_text);
Grand_Total = obj.details.output;

console.log(status_code);
console.log(req_text);
console.log(Grand_Total);

function httpGet(theUrl,access_token)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );

    return [xmlHttp.status,xmlHttp.responseText];
}
