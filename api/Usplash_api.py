import requests
import urllib3
import json

def get_images(json_data):
    access_key = "ZiJdHFcTeuKssundn9nO55pgQVqYpAQoTyoBKIenLNw"

    headers = {
        "Authorization": f"Client-ID {access_key}"
    }

    urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)

    endpoint = "https://api.unsplash.com/search/photos"

    response = []
    id_counter = 1

    for query in json_data["query"]:
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

        response.append({
            "id": id_counter,
            "spot": query,
            "pics": pics
        })
        id_counter += 1

    json_response = json.dumps(response)
    return json_response

if __name__=="__main__":
    query_data = {
        "query": ["Tokyo", "Kyoto", "Osaka"]
    }

    images_json = get_images(query_data)
    print(images_json)
