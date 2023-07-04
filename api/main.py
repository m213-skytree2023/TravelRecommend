from fastapi import FastAPI, HTTPException,Response
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

@app.post('/images')
def get_processed_data():
    # 调用 pref_introduction 函数获取数据
    api_pref = pref_introduction()
    print('spot of id1: ' + api_pref[0]["spot_en"])

    # 处理冈本json
    processed_data = process_json_data(api_pref)

    for item in processed_data:
        spot = item['spot']
        pics = search_images(spot)
        item['pics'] = pics

    # json.dumps() 将数据转换为 JSON 字符串
    json_data = json.dumps(processed_data, ensure_ascii=False)

    # 返回 JSON 响应
    return Response(json_data, content_type='application/json; charset=utf-8')