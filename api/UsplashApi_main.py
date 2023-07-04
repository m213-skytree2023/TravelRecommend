from flask import Flask, jsonify,Response
from usplash_api_re import process_json_data, search_images
from pref_intro import pref_introduction
import  json

app = Flask(__name__)

@app.route('/')
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


if __name__ == '__main__':
    app.run()
