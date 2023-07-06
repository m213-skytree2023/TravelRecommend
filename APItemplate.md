# API

## Introduction

都道府県毎のおすすめの観光スポットとその説明を ChatGPT から推薦する

## Base URL

https://api.kitaakabane2023.site

## Resources

### ChatGPT [/pref/{pref_name}]

### Function Introduction [GET]

47 都道府県名を入力（漢字のみ、都道府県は付けても付けなくてもよい）すると、3 つ観光スポット名とその観光スポットの説明を返す。

- Request

  - Parameters:
    - pref_name : (string, required) - Search prefectures name

- Response 200 (application/json)

  - Body:

    ```
    [
        {
            "id": 1,
            "spot": "旭山動物園",
            "spot_en": "Asahiyama Zoo",
            "introduction": "北海道にある動物園で、多くの動物たちを見ることができます。特に有名なのは、冬になると行われるペンギンのウォークです。"
        },
        {
            "id": 2,
            "spot": "函館山",
            "spot_en": "Mount Hakodate",
            "introduction": "函館市にある山で、展望台からは函館市街や夜景を一望することができます。特に夜景は美しく、観光客に人気です。"
        },
        {
            "id": 3,
            "spot": "美瑛の丘",
            "spot_en": "Biei Hills",
            "introduction": "美しい風景が広がる美瑛町にある丘です。四季折々の風景が楽しめ、特に夏には美しい花畑が広がります。写真撮影スポットとしても人気です。"
        }
    ]

    ```

- Response 404 (application/json)
  - Body
    ```
    {
        "message": "pref not found"
    }
    ```

### Graph Search API [/picture/{query}]

### Function Introduction [GET]

このAPIを使用すると、提供されたクエリに基づいて画像を検索し、関連する画像データを取得することができる。

- Request

  - Parameters:
    - query : (string, required) - keywrod

- Response 200 (application/json)
  - Body:
    ```
     [
      {
       "id": 1,
       "spot": "Tokyo",
       "pics": [
           "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?ixid=M3w0Njk4Mjl8MHwxfHNlYXJjaHwxfHxUb2t5byUyMFRvd2VyfGphfDB8fHx8MTY4ODUyMjQ2M3ww&ixlib=rb-4.0.3",
           "https://images.unsplash.com/photo-1558240077-e33b10a16a64?ixid=M3w0Njk4Mjl8MHwxfHNlYXJjaHwyfHxUb2t5byUyMFRvd2VyfGphfDB8fHx8MTY4ODUyMjQ2M3ww&ixlib=rb-4.0.3",
           "https://images.unsplash.com/photo-1609383020819-ccff2af581ce?ixid=M3w0Njk4Mjl8MHwxfHNlYXJjaHwzfHxUb2t5byUyMFRvd2VyfGphfDB8fHx8MTY4ODUyMjQ2M3ww&ixlib=rb-4.0.3",
           "https://images.unsplash.com/photo-1513407030348-c983a97b98d8?ixid=M3w0Njk4Mjl8MHwxfHNlYXJjaHw0fHxUb2t5byUyMFRvd2VyfGphfDB8fHx8MTY4ODUyMjQ2M3ww&ixlib=rb-4.0.3",
           "https://images.unsplash.com/photo-1604629142559-081c629d4975?ixid=M3w0Njk4Mjl8MHwxfHNlYXJjaHw1fHxUb2t5byUyMFRvd2VyfGphfDB8fHx8MTY4ODUyMjQ2M3ww&ixlib=rb-4.0.3"
       ]
     }
    ]
    ```
## References

[Unsplash api](https://unsplash.com/developers)

### 内部用 API [/]

### Function Introduction [GET]

47 都道府県名を入力（漢字のみ、都道府県は付けても付けなくてもよい）すると、3 つ観光スポット名とその観光スポットの説明を返す。

- Request

  - Parameters:
    - query: (string, required) - Search prefectures name

- Response 200 (application/json)

  - Body:

    ```
    [
        {
            "id": 1,
            "spot": "旭山動物園",
            "spot_en": "Asahiyama Zoo",
            "introduction": "北海道にある動物園で、多くの動物たちを見ることができます。特に有名なのは、冬になると行われるペンギンのウォークです。",
            "pics": [
                "url1","url2","url3","url4","url5",
            ]

        },
        {
            "id": 2,
            "spot": "函館山",
            "spot_en": "Mount Hakodate",
            "introduction": "函館市にある山で、展望台からは函館市街や夜景を一望することができます。特に夜景は美しく、観光客に人気です。",
            "pics": [
                "url1","url2","url3","url4","url5",
            ]
        },
        {
            "id": 3,
            "spot": "美瑛の丘",
            "spot_en": "Biei Hills",
            "introduction": "美しい風景が広がる美瑛町にある丘です。四季折々の風景が楽しめ、特に夏には美しい花畑が広がります。写真撮影スポットとしても人気です。",
            "pics": [
                "url1","url2","url3","url4","url5",
            ]
        }
    ]

    ```

- Response 404 (application/json)
  - Body
    {
    "message": "pref not found"
    }

### Weather [/weather]

### Function Introduction [POST]

47 都道府県名を入力（漢字のみ）すると、当時の天気情報が得られます

- Request

  - Body
    ```
    {
    "pref_name": "東京都"
    }
    ```

- Response 200 (application/json)

  - Body:
    ```
    {
            "name": "東京都",
            "desc": "曇り",
            "tempmax": 24.7,
            "tempmin": 23.64,
    }
    ```

- Response 200 (application/json)
  - Body
    ```
    false
    ```
## References

[OpenWeatherMap.org](https://openweathermap.org/api)


### Combined Data API [/combined]  

### Function Introduction [POST]
この API は、地域情報と画像データを組み合わせて処理し、提供された地域名に関連する情報を返すためのものである。

- Request 

- Body

  ```
       {
         "pref_name": "東京都"
       }
  ```

- Response 200 (application/json)
  - Body
    ```
        [
            {
              "id": 1,
              "spot": "東京タワー",
              "spot_en": "Tokyo Tower",
              "introduction": "東京のシンボルである東京タワーは、高さ333メートルの展望台からは東京の美しい景色を一望することができます。夜にはライトアップされ、ロマンチックな雰囲気を演出しています。",
              "pics": [
                "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?ixid=M3w0Njk4Mjl8MHwxfHNlYXJjaHwxfHxUb2t5byUyMFRvd2VyfGphfDB8fHx8MTY4ODUyMjQ2M3ww&ixlib=rb-4.0.3",
                "https://images.unsplash.com/photo-1558240077-e33b10a16a64?ixid=M3w0Njk4Mjl8MHwxfHNlYXJjaHwyfHxUb2t5byUyMFRvd2VyfGphfDB8fHx8MTY4ODUyMjQ2M3ww&ixlib=rb-4.0.3",
                "https://images.unsplash.com/photo-1609383020819-ccff2af581ce?ixid=M3w0Njk4Mjl8MHwxfHNlYXJjaHwzfHxUb2t5byUyMFRvd2VyfGphfDB8fHx8MTY4ODUyMjQ2M3ww&ixlib=rb-4.0.3",
                "https://images.unsplash.com/photo-1513407030348-c983a97b98d8?ixid=M3w0Njk4Mjl8MHwxfHNlYXJjaHw0fHxUb2t5byUyMFRvd2VyfGphfDB8fHx8MTY4ODUyMjQ2M3ww&ixlib=rb-4.0.3",
                "https://images.unsplash.com/photo-1604629142559-081c629d4975?ixid=M3w0Njk4Mjl8MHwxfHNlYXJjaHw1fHxUb2t5byUyMFRvd2VyfGphfDB8fHx8MTY4ODUyMjQ2M3ww&ixlib=rb-4.0.3"
              ]
            },
            {
              "id": 2,
              "spot": "浅草寺",
              "spot_en": "Senso-ji Temple",
              "introduction": "浅草寺は東京で最も有名な寺院の一つで、日本の伝統的な建築様式を見ることができます。雷門や仲見世通りなど、観光名所も多くあります。",
              "pics": [
                "https://images.unsplash.com/photo-1549283593-9f4e5590af9b?ixid=M3w0Njk4Mjl8MHwxfHNlYXJjaHwxfHxTZW5zby1qaSUyMFRlbXBsZXxqYXwwfHx8fDE2ODg1MjI0NjR8MA&ixlib=rb-4.0.3",
                "https://images.unsplash.com/photo-1553432172-f37667f5ed15?ixid=M3w0Njk4Mjl8MHwxfHNlYXJjaHwyfHxTZW5zby1qaSUyMFRlbXBsZXxqYXwwfHx8fDE2ODg1MjI0NjR8MA&ixlib=rb-4.0.3",
                "https://images.unsplash.com/photo-1680196436099-f7bc802b80eb?ixid=M3w0Njk4Mjl8MHwxfHNlYXJjaHwzfHxTZW5zby1qaSUyMFRlbXBsZXxqYXwwfHx8fDE2ODg1MjI0NjR8MA&ixlib=rb-4.0.3",
                "https://images.unsplash.com/photo-1686933021139-69c8b4242198?ixid=M3w0Njk4Mjl8MHwxfHNlYXJjaHw0fHxTZW5zby1qaSUyMFRlbXBsZXxqYXwwfHx8fDE2ODg1MjI0NjR8MA&ixlib=rb-4.0.3",
                "https://images.unsplash.com/photo-1591538283302-ba8970730d6b?ixid=M3w0Njk4Mjl8MHwxfHNlYXJjaHw1fHxTZW5zby1qaSUyMFRlbXBsZXxqYXwwfHx8fDE2ODg1MjI0NjR8MA&ixlib=rb-4.0.3"
              ]
            },
            {
              "id": 3,
              "spot": "上野公園",
              "spot_en": "Ueno Park",
              "introduction": "上野公園は東京で最も広い公園の一つで、美しい自然と多くの文化施設があります。国立博物館や上野動物園など、さまざまなアクティビティを楽しむことができます。",
              "pics": [
                "https://images.unsplash.com/photo-1643186339834-d74273b50e1a?ixid=M3w0Njk4Mjl8MHwxfHNlYXJjaHwxfHxVZW5vJTIwUGFya3xqYXwwfHx8fDE2ODg1MjI0NjR8MA&ixlib=rb-4.0.3",
                "https://images.unsplash.com/photo-1649562757597-574b13ceb62f?ixid=M3w0Njk4Mjl8MHwxfHNlYXJjaHwyfHxVZW5vJTIwUGFya3xqYXwwfHx8fDE2ODg1MjI0NjR8MA&ixlib=rb-4.0.3",
                "https://images.unsplash.com/photo-1558452919-3a47422e2fd0?ixid=M3w0Njk4Mjl8MHwxfHNlYXJjaHwzfHxVZW5vJTIwUGFya3xqYXwwfHx8fDE2ODg1MjI0NjR8MA&ixlib=rb-4.0.3",
                "https://images.unsplash.com/photo-1649562758044-8d8bfd4c2cff?ixid=M3w0Njk4Mjl8MHwxfHNlYXJjaHw0fHxVZW5vJTIwUGFya3xqYXwwfHx8fDE2ODg1MjI0NjR8MA&ixlib=rb-4.0.3",
                "https://images.unsplash.com/photo-1557140592-7be2f7d85712?ixid=M3w0Njk4Mjl8MHwxfHNlYXJjaHw1fHxVZW5vJTIwUGFya3xqYXwwfHx8fDE2ODg1MjI0NjR8MA&ixlib=rb-4.0.3"
              ]
            }
          ]
    ```
- Response 200 (application/json)
  - Body
    ```
    false
    ```
## References
[Unsplash](https://unsplash.com/developers)  
[ChatGPT](https://openai.com/chatgpt)