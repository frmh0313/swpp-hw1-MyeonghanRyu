from crawler import JsonCrawler


class WeatherForecast:
    def __init__(self, locations, conditions):
        self.locations = locations
        self.conditions = conditions
        for location in locations:
            JsonCrawler("https://www.metaweather.com/api/location/search/?query=%s" % location, location)

    def run(self):
        woeids = {location: JsonCrawler.get_by_name(location).get_data()[0]['woeid'] for location in self.locations }
        for location in self.locations:
            JsonCrawler("https://www.metaweather.com/api/location/%s" % woeids[location], location, active=True)
        while True:
            for location in self.locations:
                light_cloud_condition = self.conditions[0][1]
                light_cloud_msg = self.conditions[0][0]

                ice_age_condition = self.conditions[1][1]
                ice_age_msg = self.conditions[1][0]

                is_light_cloud = light_cloud_condition(location)
                is_ice_age = ice_age_condition(location)
                if is_light_cloud:
                    print(light_cloud_msg, "in", location)
                if is_ice_age:
                    print(ice_age_msg, "in", location)


if __name__ == '__main__':
    forecast = WeatherForecast(['seoul', 'new york'], [
        ('Light cloud', lambda x: JsonCrawler.get_by_name(x).get_data()['consolidated_weather'][0]['weather_state_name'] == 'Light Cloud'),
        ('Ice age', lambda x: JsonCrawler.get_by_name(x).get_data()['consolidated_weather'][0]['min_temp'] < -30)

    ])
    forecast.run()

# lambda condition -> how to make it simpler?
# taking a location name and calling Classmethod?
