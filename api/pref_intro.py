import json
import requests
import urllib3
from urllib3.exceptions import InsecureRequestWarning
urllib3.disable_warnings(InsecureRequestWarning)

API_URL = "https://api.openai.com/v1/chat/completions"
API_KEY = ""

def chat(text,
         messages=None,
         settings="",
         max_tokens=500,
         temperature=1.,
         top_p=.1,
         presence_penalty=0.,
         frequency_penalty=0.):

    # やり取りの管理
    messages = messages if messages is not None else []
    if settings and not messages:
        messages.append({"role": "system", "content": settings})
    messages.append({'role': 'user', 'content': text})

    # ヘッダ
    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {API_KEY}"
    }

    # ペイロード
    payload = {
        "model": "gpt-3.5-turbo",
        "messages": messages,
        "max_tokens": max_tokens,
        "temperature": temperature,
        "top_p": top_p,
        "presence_penalty": presence_penalty,
        "frequency_penalty": frequency_penalty,
        "stream": True,
    }

    # APIを叩く、streamをTrueに
    resp = requests.post(API_URL, headers=headers, json=payload, stream=True, verify=False)
    response_text = ''
    for chunk in resp.iter_lines():
        try:
            j = json.loads(chunk.decode()[6:])
            content = j['choices'][0]['delta'].get('content')
            if content:
                response_text += content
                #yield content
        except:
            ...
    else:  
        messages += [{'role': 'assistant', 'content': response_text}]

    return response_text


def pref_introduction(pref="愛知"):
    text = pref + '''の観光スポット3点とその説明をしてください。
                制約
                ・各説明を150字以内で生成
                ・以下のようなjson形式で出力
                ・観光スポットの英語名を"spot_en"に表示
                [{"id": 1, "spot": "spot1", "spot_en": "spot1_en", "introduction": ""},{"id": 2, "spot": "spot2", "spot_en": "spot2_en", "introduction": ""},{"id": 3, "spot": "spot3", "spot_en": "spot3_en", "introduction": ""}]
            '''
    response_text = chat(text, [])
    response_json = json.loads(response_text)
    return response_json

if __name__=="__main__":
    api_pref = pref_introduction()
    print('spot of id1 :' + {api_pref[0]["spot_en"]})
    print(api_pref)