import requests
import json

url = "https://www.zohoapis.in/crm/v2/functions/test1/actions/execute?auth_type=apikey&zapikey=1003.73537686ad12f499d4992c72edbadf50.1cc3ecfcac84ea35e128e51fd6dc1cb4"
req = requests.get(url)
print(req.status_code)
print(req.text)


#parsing json
obj = json.loads(req.text)
Grand_Total = obj['details']['output']
print(Grand_Total)
