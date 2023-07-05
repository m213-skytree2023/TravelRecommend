import requests
import urllib3
import json



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