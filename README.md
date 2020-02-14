# The Noisy Guts Project DEV_API

## /api HTTP Endpoints
| Endpoint | HTTP Request Type | Description
| - | - | - |
| `./` | GET | gets all the database points |
| `./login` | POST | allows you to post a new user to the database |
| `./ATOMIC_DELETE` | DELETE | lets you delete in batches |
| `./foods` | DELETE | Deletes all the queried food data |
| `./contexts` | DELETE | Deletes all the quieries contextual data |
| `./PASSWORD_TEST` | POST | lets you test the password |
| `./ATOMIC_EDIT` | PUT | lets you edit in batches | 

## `(GET) ./` - API ROOT
accepts a json body request in the structure of mongodb queries. It's sent through the `body` of the request body as `json`

`

    ## HTTP GET Body Structure

    {
        mongoQuery1: Mixed,
        mongoQuery2: Mixed, 
        ...
        MongoQueryN: Mixed
    }

`

## `(POST) ./login` - Create a new user
Allows you to create a new user. The parameters for this request are sent through the `body` of the requests as `json`. The parameters are as follows:
`

    ## HTTP POST Body Structure

    {
        username: String,
        password: String,
        name: String,
        isAdmin: Boolean,
    }

`

## `(DELETE) ./ATOMIC_DELETE` - Delete Batches of Data
Allows you to delete batches of `symptoms`, `recordings` & `overalls` based on mongodb queries. It requires the correct `MASTER_KEY` to be passed through as `password` alongside a relevant MongoDB query.

`

    ## HTTP DELETE Body Structure


    {
        password: String,
        query: {
            mongoQuery1: Mixed,
            mongoQuery2: Mixed, 
            ...
            MongoQueryN: Mixed
        }
    }

`

## `(DELETE) ./foods ./contexts` - Deletes queried data
Allows you to delete `food` or `context` data (depending on which endpoint). This is only possible with the `MASTER_KEY` as a `password`.

`

    ## HTTP DELETE BOdy Structure 

    {
        password: String, 
        query: {
            mongoQuery1: Mixed,
            mongoQuery2: Mixed, 
            ...
            MongoQueryN: Mixed
        }
    }

`

## `(POST) ./PASSWORD_TEST` - Test the Master Password
Allows you to test the master password. Send the password through a `password` field in the http `body`.

`

    ## HTTP POST Body Structure

    {
        password: String
    }

`

## `(PUT) ./ATOMIC_EDIT` - Edits batches of data
Allows you to create changes to batches of queried MongoDB Data. The `query`, `password` and `delta` is required.

`

    ## HTTP PUT Body Structure

    {
        password: String,
        query: {
            mongoQuery1: Mixed,
            mongoQuery2: Mixed, 
            ...
            MongoQueryN: Mixed
        },
        delta: {
            mongoDelta1: Mixed,
            mongoDelta2: Mixed, 
            ...
            MongoDeltaN: Mixed
        }
    }

`