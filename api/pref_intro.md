# API

## Introduction
都道府県毎のおすすめの観光スポットをChatGPTを使用して3つ取得

## Base URL
https://api.example.com/v1

## Resources

### ChatGPT [/]

### Function Introduction [GET]  

47都道府県名を入力（漢字のみ、都道府県は付けても付けなくてもよい）すると、3つ観光スポット名とその観光スポットの説明を返す。

+ Request

    + Parameters:  
        + pref_name : 北海道 (string, required) - Search prefectures name

+ Response 200 (application/json)
    + Body:  
        ```
        [
            {
                "id": 1,
                "spot": "函館山",
                "introduction": "函館市にある標高334メートルの山で、展望台からは函館市街や夜景を一望することができます。歴史的な要素もあり、明治時代の洋館や旧函館区公会堂なども点在しています。"
            },
            {
                "id": 2,
                "spot": "旭山動物園",
                "introduction": "旭川市にある北海道最大の動物園で、約800種類の動物が飼育されています。特に有名なのはペンギンやホッキョクグマです。広大な敷地には動物たちの生息地が再現されており、自然な姿を見ることができます。"
            },
            {
                "id": 3,
                "spot": "美瑛の丘",
                "introduction": "美しい風景が広がる美瑛町にある丘です。四季折々の風景が楽しめ、特に夏には美しい花畑が広がります。また、冬には雪景色が美しいです。写真愛好家にも人気のスポットです。"
            }
        ]

        ```

+ Response 404 (application/json)
    + Body
        {
            "message": "User not found"
        }