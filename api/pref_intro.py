import json
import requests
import urllib3
from urllib3.exceptions import InsecureRequestWarning
urllib3.disable_warnings(InsecureRequestWarning)

API_URL = "https://api.openai.com/v1/chat/completions"
API_KEY = "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"
# 都道府県名のリスト
prefectures = [
    "北海道",
    "青森県",
    "岩手県",
    "宮城県",
    "秋田県",
    "山形県",
    "福島県",
    "茨城県",
    "栃木県",
    "群馬県",
    "埼玉県",
    "千葉県",
    "東京都",
    "神奈川県",
    "新潟県",
    "富山県",
    "石川県",
    "福井県",
    "山梨県",
    "長野県",
    "岐阜県",
    "静岡県",
    "愛知県",
    "三重県",
    "滋賀県",
    "京都府",
    "大阪府",
    "兵庫県",
    "奈良県",
    "和歌山県",
    "鳥取県",
    "島根県",
    "岡山県",
    "広島県",
    "山口県",
    "徳島県",
    "香川県",
    "愛媛県",
    "高知県",
    "福岡県",
    "佐賀県",
    "長崎県",
    "熊本県",
    "大分県",
    "宮崎県",
    "鹿児島県",
    "沖縄県"
]
# 県名を除いたリスト
prefectures_without_name = [prefecture[:-1] for prefecture in prefectures]

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


#都道府県名 -> spot&intro
def pref_introduction(pref):
    if pref in (prefectures) or pref in (prefectures_without_name):
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
    else:# pref(=都道府県名)が47都道府県の名前に存在しないとき
        return False

if __name__=="__main__":
    api_pref = pref_introduction("北海道")
    print('spot of id1 :' + api_pref[0]["spot_en"])
    print(api_pref)