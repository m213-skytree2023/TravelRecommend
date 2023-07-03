# API

## Introduction
XXXXXXXXXX

## Base URL
https://api.example.com/v1

## Resources

### ChatGPT [/]

### Function Introduction [GET]  

XXXXXXXXXX

+ Request

    + Parameters:  
        + query : Search term

+ Response 200 (application/json)
    + Body:  
        ```
        [  
            {  
                "id": 1,  
                "spot": "spot1",  
                "introduction": "XXXXXXXXX"  
            },
            {  
                "id": 2,  
                "spot": "spot2",  
                "introduction": "XXXXXXXXX"  
            },
            {  
                "id": 3,  
                "spot": "spot3",  
                "introduction": "XXXXXXXXX"  
            }
        ]

        ```

+ Response 404 (application/json)
    + Body
        {
            "message": "User not found"
        }


### Graph [/]

### Function Introduction [POST]  

XXXXXXXXXX

+ Request

    + Body:  
        ```
        {
            "query": [
                "spot1",
                "spot2",
                "spot3"
            ]
        }
        ```  

+ Response 200 (application/json)
    + Body:  
        ```
        [  
            {  
                "id": 1,  
                "spot": "spot1",  
                "pics": [
                    "url1","url2","url3","url4","url5",
                ]  
            },
            {  
                "id": 2,  
                "spot": "spot2",  
                "pics": [
                    "url1","url2","url3","url4","url5",
                ]  
            },
            {  
                "id": 3,  
                "spot": "spot3",  
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



