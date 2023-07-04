from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from random import randint

from pref_intro import pref_introduction

app = FastAPI()

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
async def read_pref(pref_name: str):
    pref = pref_introduction(pref=pref_name)
    if pref: 
        return pref
    else:
        raise HTTPException(status_code=404, detail="pref not found")