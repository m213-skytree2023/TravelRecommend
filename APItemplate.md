# API

## Introduction
都道府県毎のおすすめの観光スポットとその説明をChatGPTから推薦する

## Base URL
https://api.example.com/v1

## Resources

### ChatGPT [/pref/{pref_name}]

### Function Introduction [GET]  

47都道府県名を入力（漢字のみ、都道府県は付けても付けなくてもよい）すると、3つ観光スポット名とその観光スポットの説明を返す。

+ Request

    + Parameters:  
        + pref_name : (string, required) - Search prefectures name

+ Response 200 (application/json)
    + Body:  
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

+ Response 404 (application/json)
    + Body  
        ```
        {
            "message": "User not found"
        }
        ```    

+ Response 404 (application/json)
    + Body  
        ``` 
        {
            "message": "pref not found"
        }
        ``` 


# Graph Search API [GET /picture/{query}]

## Introduction
このAPIを使用すると、提供されたクエリに基づいて画像を検索し、関連する画像データを取得することができる。
## Endpoint 
+ GET /picture/{query}
## Parameters 
query（パスパラメーター）：画像検索のためのクエリ語句、URLパスの一部として含まれる。
## Request Example
+ GET /picture/Tokyo 
## Response Example
+ Response 200 (application/json)
    + Body:
       ``` 
        [
  {
    "id": 1,
    "spot": "Tokyo",
    "pics": [
      "https://example.com/image1.jpg",
      "https://example.com/image2.jpg",
      "https://example.com/image3.jpg",
      "https://example.com/image4.jpg",
      "https://example.com/image5.jpg",
]
  }
]
      ```
## References
Unsplash API ドキュメント


### 内部用API [/]

### Function Introduction [GET]  

47都道府県名を入力（漢字のみ、都道府県は付けても付けなくてもよい）すると、3つ観光スポット名とその観光スポットの説明を返す。

+ Request

    + Parameters:  
        + pref_name : (string, required) - Search prefectures name

+ Response 200 (application/json)
    + Body:  
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

+ Response 404 (application/json)
    + Body
        {
            "message": "User not found"
        }

+ Response 404 (application/json)
    + Body
        {
            "message": "pref not found"
        }
