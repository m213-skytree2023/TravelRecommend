from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from random import randint
from Usplash_api import get_images
from usplash_api_re import process_json_data, search_images
import json
from pref_intro import pref_introduction

app = FastAPI()

class Pref(BaseModel):
    pref_name    : str

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

#Prefectures introduction
@app.get("/pref")
def read_pref():
    return {"Input": "pref_name"}

#都道府県名 -> spot&intro
@app.post("/pref/search")
async def read_pref(pref_name: Pref):
    pref = pref_introduction(pref=pref_name.pref_name)
    if pref: 
        return pref
    else:
        raise HTTPException(status_code=404, detail="pref not found")


@app.get("/picture/{query}")
async def search_pictures(query: str):
    query_data = {
        "query": [query]
    }
    images_json = get_images(query_data)
    return images_json

@app.post("/combined")
async def combined_route(pref_name: Pref):
    pref_data = pref_introduction(pref=pref_name.pref_name)

    if pref_data:
        processed_data = process_json_data(pref_data)

        for item in processed_data:
            spot_en = item['spot_en']
            pics = search_images(spot_en)

            if len(pics) == 0:
                error_message = "検索キーワードが無効です。画像が見つかりませんでした"
                raise HTTPException(status_code=404, detail=error_message)

            item['pics'] = pics

        json_data = json.dumps(processed_data, ensure_ascii=False)

        return json_data
    else:
        error_message = "都道府県名が見つかりませんでした"
        raise HTTPException(status_code=404, detail=error_message)
