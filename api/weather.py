import json
import requests
import urllib3
from urllib3.exceptions import InsecureRequestWarning
urllib3.disable_warnings(InsecureRequestWarning)

API_TOKEN = ""


def report_weather(place):
    data = get_weather_from_api(place)
    weather = {
        "name": data["name"],
        "desc": data["weather"][0]["description"],
        "tempmax": data["main"]["temp_max"],
        "tempmin": data["main"]["temp_min"],
    }
    return weather

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


