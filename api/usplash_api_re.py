import requests
import urllib3
import json

#接受json数据，处理小冈的json数据
def process_json_data(json_data):
    processed_data = []

    for item in json_data:
        spot = item.get('spot', '')
        spot_en = item.get('spot_en', '')
        introduction = item.get('introduction', '')

    #列表报错？将写在字典里，便于处理
        processed_item = {
            'id': item.get('id', None),
            'spot': spot,
            'spot_en': spot_en,
            'introduction': introduction

        }

        processed_data.append(processed_item)

    return processed_data

def search_images(query):
    access_key = "ZiJdHFcTeuKssundn9nO55pgQVqYpAQoTyoBKIenLNw"

    headers = {
        "Authorization": f"Client-ID {access_key}"
    }

    urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)

    endpoint = "https://api.unsplash.com/search/photos"

    params = {
        "query": query,
        "lang": "ja",
        "image_type": "photo"
    }

    result = requests.get(endpoint, params=params, headers=headers, verify=False)
    res = result.json()

    if "results" in res and isinstance(res["results"], list):
        pics = [item["urls"]["raw"] for item in res["results"][:5]]
    elif "results" in res and isinstance(res["results"], dict):
        pics = [res["results"]["urls"]["raw"]]
    else:
        pics = []

    return pics