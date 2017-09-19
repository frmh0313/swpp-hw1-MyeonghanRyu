from pprint import pprint
import requests
test_location = 'seoul'
search_url = "https://www.metaweather.com/api/location/search/?query=%s" % test_location
woeid_url = "https://www.metaweather.com/api/location/1132599"

response = requests.get(woeid_url)
data = response.json()
pprint(data)

