import json
import requests
import urllib3
import pref_intro
from urllib3.exceptions import InsecureRequestWarning
urllib3.disable_warnings(InsecureRequestWarning)

with open('weather_apikey.json') as f:
    di = json.load(f)
API_TOKEN = di["API_KEY"]


def report_weather(place):
    if place in (pref_intro.prefectures):
        data = get_weather_from_api(place)
        weather = {
            "name": data["name"],
            "desc": data["weather"][0]["description"],
            "tempmax": data["main"]["temp_max"],
            "tempmin": data["main"]["temp_min"],
        }
        return weather
    else:
        return False


def get_weather_from_api(place):

    response = requests.get(
        "https://api.openweathermap.org/data/2.5/weather",
        params={
            "q": place,
            "appid": API_TOKEN,
            "units": "metric",
            "lang": "ja",
        },
        verify=False
    )

    return json.loads(response.text)
