import json
from pprint import pprint

with open("cities.json") as cities_file:
    cities_data = json.load(cities_file)
    pprint(cities_data)

