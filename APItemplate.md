# API

## Introduction
XXXXXXXXXX

## Base URL
https://api.example.com/v1

## Resources

### Function [/users]

#### Function Introduction [GET]
XXXXXXXXXX

+ Request

    + Headers Authorization: Bearer {access_token}

+ Response 200 (application/json)
    + Body
        {
            "id": 1,
            "name": "John Doe",
            "email": "johndoe@example.com",
            "age": 30
        }

+ Response 404 (application/json)
    + Body
        {
            "message": "User not found"
        }


