---
sidebarDepth: 3
lang: en-US
title: SpaceCrafts v1.0.0
description: Reference Material
sidebarDepth: 2
externalLinkIcon: false
---
<!-- Badge Items -->
[postman.api]: https://app.getpostman.com/run-collection/25171436-a9adbca1-1fd8-4e68-98f6-8bf6fecfe4b1?action=collection%2Ffork&collection-url=entityId%3D25171436-a9adbca1-1fd8-4e68-98f6-8bf6fecfe4b1%26entityType%3Dcollection%26workspaceId%3D7e28d2b2-9c51-4cf4-a71e-74c026e0ec83
![spacecraft-256x256.png](../.vuepress/public/images/spacecraft-256x256.png)

# SpaceCrafts v1.0.0 #

<h3>Buy or rent spacecrafts with us!</h3>

## Introduction ##
This is an example from Postman's API Boilerplate Definition called SpacesCrafts.Similar to Swagger's petstore example.

[![Run in Postman](https://run.pstmn.io/button.svg)][postman.api]

**What should be documented here?**

- Snippets of the key sections of the definition for easy reviewing in GitHub or BitBucket repositories.
- Any **"Tips & Tricks"** that need to be pointed out to other users.

<h3>Roadmap:</h3>

1. Keep good documentation.
2. Setup oAuth2 configuration in `securitySchemes`
3. Add the ability to add spacecrafts to the Ground Control system.

## Servers ##

The `servers` section of the OpenAPI Specification allows us to set up some version controls for the Spacecrafts
endpoints.

### baseUrl ###

The baseUrl is generated from the `url` property of the server. It indicates the Spacecrafts public endpoints, where the
consumer of the api can reach them.

::: tip Best Practice:
Setup 2 servers by default:

**Mock:** &rarr; Prototyping an endpoint before building it, is just "standard" these days.

&darr; add additional environments (optional)

**Production:** &larr; Where this will live when done.
:::

### basePath ###

The `basePath` is added to the `variables` object to implement a simple endpoint versioning. Using the `enum` allow
control released versions.

::: warning Example
We are going to start working on v2 with the addition of a new endpoint.

On **Mock Server** we add `v2` to the `enum`, but in **Production** only `v1` is defined.
:::

```json
{
  "servers": [
    {
      "description": "Mock",
      "url": "https://developer.example.io/{basePath}",
      "variables": {
        "basePath": {
          "enum": [
            "v1",
            "v2"
          ],
          "default": "v1"
        }
      }
    },
    {
      "description": "Production",
      "url": "https://api.example.io/{basePath}",
      "variables": {
        "basePath": {
          "enum": [
            "v1"
          ],
          "default": "v1"
        }
      }
    }
  ]
}
```

## Security ##

::: danger IMPORTANT
Security First!
:::

The `securitySchemes` is added to the [Components](#components) object to implement an endpoint security. By default,
Postman adds the_apiKey_ type to the `securitySchemes` when you use the boilerplate.

It's a firewall, if you don't have a valid `apiKey` you can't come in. It is applied at the global level, and you get
a `403 Forbidden` response without it.

::: tip HINT
You also get a `403 Forbidden` when using the wrong `apiKey`  
:::

```json
{
  "components": {
    "securitySchemes": {
      "ApiKey": {
        "type": "apiKey",
        "in": "header",
        "name": "X-Api-Key"
      },
      "Authorization": {
        "bearerFormat": "JWT",
        "scheme": "bearer",
        "type": "http"
      },
      "Basic": {
        "scheme": "basic",
        "type": "http"
      }
    }
  },
  "security": [
    {
      "ApiKey": []
    }
  ]
}

```

## Endpoints ##

Endpoints provide access to your Application's functionality, we use this section of the README to outline them.

**The following endpoints are documented in these sections:**

```json
{
  "tags": [
    {
      "name": "Authentication",
      "description": "The following endpoints, grant and revoke access to Spacecrafts",
      "externalDocs": {
        "url": "https://"
      }
    },
    {
      "name": "Spacecrafts",
      "description": "The following endpoints, manage information about Spacecrafts",
      "externalDocs": {
        "url": "https://"
      }
    }
  ],
  "paths": {
    "{baseUrl}/oauth2/token": {
    },
    "{baseUrl}/oauth2/revoke": {
    },
    "{baseUrl}/spacecrafts/{spacecraftId}": {
    }
  }
}

```

### Authentication ##

<h3><i>Obtain a token (login)</i></h3>

#### `POST`: `{baseUrl}/oauth2/token` ####

| Section          | Description                                                                                                                                  |
|------------------|----------------------------------------------------------------------------------------------------------------------------------------------|
| **Header**       | <ul><li>**X-Api-Key**: {_apiKey_}</li><li>**Authorization**: Basic <br>Base64 encoded({_basicAuthUsername_}:{_basicAuthPassword_})</li></ul> |
| **Content Type** | <ul><li>**application/x-www-form-urlencoded**</li></ul>                                                                                      |
| **Required**     | <ul><li>**true**</li></ul>                                                                                                                   |
| **RequestBody**  | <ul><li>**grant_type**: client_credential</li><li>**scope**: read:spacecrafts</li></ul>                                                      |
| **Responses**    | <ul><li>**200** OK</li><li>**401** Unauthorized</li><li>**403** Forbidden</li></ul>                                                          |

```json

{
  "paths": {
    "{baseUrl}/oauth2/token": {
      "parameters": [
        {
          "$ref": "#/components/parameters/X-Api-Key"
        }
      ],
      "post": {
        "tags": [
          "Authentication"
        ],
        "summary": "Login",
        "security": [
          {
            "Basic": []
          }
        ],
        "parameters": [],
        "requestBody": {
          "$ref": "#/components/requestBodies/TokenRequest"
        },
        "responses": {
          "200": {
            "description": "200 OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Token"
                },
                "examples": {
                  "200": {
                    "$ref": "#/components/examples/TokenGranted"
                  }
                }
              }
            }
          },
          "401": {
            "$ref": "#/components/responses/401"
          },
          "403": {
            "$ref": "#/components/responses/403"
          }
        }
      }
    }
  }
}

```

<h3><i>Revoke a token (logout)</i></h3>

#### `POST`: `{baseUrl}/oauth2/revoke` ####

| Section          | Description                                                                                   |
|------------------|-----------------------------------------------------------------------------------------------|
| **Header**       | <ul><li>**X-Api-Key**: {_apiKey_}</li><li>**Authorization**: Bearer {_bearerToken_}</li></ul> |
| **Content Type** | <ul><li>**application/json**</li></ul>                                                        |
| **Required**     | <ul><li>**true**</li></ul>                                                                    |
| **RequestBody**  | <ul><li>**grant_type**: client_credential</li><li>**scope**: read:spacecrafts</li></ul>       |
| **Responses**    | <ul><li>**200** OK</li><li>**401** Unauthorized</li><li>**403** Forbidden</li></ul>           |

```json
{
  "paths": {
    "/oauth2/revoke": {
      "parameters": [
        {
          "$ref": "#/components/parameters/X-Api-Key"
        }
      ],
      "post": {
        "tags": [
          "Authentication"
        ],
        "summary": "Logout",
        "security": [
          {
            "Authorization": []
          }
        ],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "access_token": {
                    "description": "The token to be revoked.",
                    "type": "string"
                  }
                }
              },
              "examples": {
                "access_token": {
                  "$ref": "#/components/examples/TokenRevoke"
                }
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "200 OK",
            "content": {}
          },
          "401": {
            "$ref": "#/components/responses/401"
          },
          "403": {
            "$ref": "#/components/responses/403"
          }
        }
      }
    }
  }
}
```

### SpaceCrafts ###

<h3><i>Retrieve a list of SpaceCrafts</i></h3>

#### `GET`: `{baseUrl}/spacecrafts/{spacecraftId}` ####

| Section          | Description                                                                                                                                         |
|------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------|
| **Header**       | <ul><li>**X-Api-Key**: {_apiKey_}</li><li>**Authorization**: Bearer {_bearerToken_}</li></ul>                                                       |
| **Content Type** | <ul><li>**application/json**</li></ul>                                                                                                              |
| **Required**     | <ul><li>**false**</li></ul>                                                                                                                         |
| **RequestBody**  |                                                                                                                                                     |
| **Responses**    | <ul><li>**200** OK</li><li>**401** Unauthorized</li><li>**403** Forbidden</li><li>**404** Not Found</li><li>**500** Internal Server Error</li></ul> |

```json
{
  "paths": {
    "/spacecrafts/{spacecraftId}": {
      "parameters": [
        {
          "$ref": "#/components/parameters/X-Api-Key"
        },
        {
          "$ref": "#/components/parameters/SpacecraftId"
        }
      ],
      "get": {
        "tags": [
          "Spacecrafts"
        ],
        "summary": "Retrieve Spacecraft details by id.",
        "security": [
          {
            "Authorization": []
          }
        ],
        "responses": {
          "200": {
            "description": "200 OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Spacecraft"
                },
                "examples": {
                  "200": {
                    "$ref": "#/components/examples/SpacecraftWorldView4"
                  }
                }
              }
            }
          },
          "401": {
            "$ref": "#/components/responses/401"
          },
          "403": {
            "$ref": "#/components/responses/403"
          },
          "404": {
            "$ref": "#/components/responses/404"
          },
          "500": {
            "$ref": "#/components/responses/500"
          }
        }
      }
    }
  }
}
```

## Components ##

The following components are defined in the OpenAPI Specification.

### Parameters ###

#### X-Api-Key ####

```json
{
  "components": {
    "parameters": {
      "X-Api-Key": {
        "description": "Added as a part of security scheme: apiKey",
        "name": "X-Api-Key",
        "style": "simple",
        "in": "header",
        "required": true,
        "schema": {
          "$ref": "#/components/schemas/X-Api-Key"
        }
      }
    }
  }
}
```

#### SpacecraftId ####

```json
{
  "components": {
    "parameters": {
      "SpacecraftId": {
        "name": "spacecraftId",
        "description": "The unique identifier of the spacecraft",
        "in": "path",
        "required": true,
        "schema": {
          "$ref": "#/components/schemas/SpacecraftId"
        }
      }
    }
  }
}
```

### Schemas ###

#### X-Api-Key ####

```json
{
  "components": {
    "schemas": {
      "X-Api-Key": {
        "type": "string",
        "description": "Application ApiKey",
        "example": "00K78fbO1uO9ryr5ng6x-Fi9EugBf2m1IT5OPyduOR"
      }
    }
  }
}
```

#### Token ####

```json
{
  "components": {
    "schemas": {
      "Token": {
        "type": "object",
        "properties": {
          "access_token": {
            "description": "The Authentication token being granted.",
            "type": "string"
          },
          "token_type": {
            "description": "The type of token being granted.",
            "type": "string"
          },
          "scope": {
            "description": "Scopes associated with the token.",
            "type": "string"
          },
          "expires_in": {
            "description": "The token will expire in N seconds.",
            "type": "integer"
          }
        }
      }
    }
  }
}
```

#### SpacecraftId ####

```json
{
  "components": {
    "schemas": {
      "SpacecraftId": {
        "description": "The unique identifier of a spacecraft",
        "type": "string"
      }
    }
  }
}
```

#### Spacecraft ####

```json
{
  "components": {
    "schemas": {
      "Spacecraft": {
        "type": "object",
        "required": [
          "id",
          "name",
          "type"
        ],
        "properties": {
          "id": {
            "$ref": "#/components/schemas/SpacecraftId"
          },
          "name": {
            "type": "string"
          },
          "type": {
            "type": "string",
            "enum": [
              "capsule",
              "probe",
              "satellite",
              "space-plane",
              "station"
            ]
          },
          "description": {
            "type": "string"
          }
        }
      }
    }
  }
}
```

#### Error ####

```json
{
  "components": {
    "schemas": {
      "Error": {
        "type": "object",
        "required": [
          "message"
        ],
        "properties": {
          "code": {
            "description": "A system error code",
            "type": "string"
          },
          "summary": {
            "description": "A short summary of the error",
            "type": "string"
          },
          "message": {
            "description": "A human readable error message",
            "type": "string"
          }
        }
      }
    }
  }
}

```

### RequestBodies ###

#### Token Request ####

```json
{
  "components": {
    "requestBodies": {
      "TokenRequest": {
        "required": true,
        "content": {
          "application/x-www-form-urlencoded": {
            "schema": {
              "type": "object",
              "properties": {
                "grant_type": {
                  "description": "Type of credentials requesting.",
                  "default": "client_credentials",
                  "type": "string"
                },
                "scope": {
                  "description": "The scopes (access) being requested.",
                  "default": "read:spacecrafts",
                  "type": "string"
                }
              },
              "required": [
                "grant_type",
                "scope"
              ]
            }
          }
        }
      }
    }
  }
}

```

### Responses ###

#### 204 No Content ####

```json
{
  "components": {
    "responses": {
      "204": {
        "description": "204 No Content",
        "content": {
          "application/json": {
            "schema": {}
          }
        }
      }
    }
  }
}
```

#### 400 Bad Request ####

```json
{
  "components": {
    "responses": {
      "400": {
        "description": "400 Bad Request",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/Error"
            },
            "examples": {
              "400": {
                "$ref": "#/components/examples/400BadRequest"
              }
            }
          }
        }
      }
    }
  }
}
```

#### 401 Unauthorized ####

```json
{
  "components": {
    "responses": {
      "401": {
        "description": "401 Unauthorized",
        "headers": {
          "WWW_Authenticate": {
            "schema": {
              "type": "string"
            }
          }
        },
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/Error"
            },
            "examples": {
              "401": {
                "$ref": "#/components/examples/401Unauthorized"
              }
            }
          }
        }
      }
    }
  }
}
```

#### 403 Forbidden ####

```json
{
  "components": {
    "responses": {
      "403": {
        "description": "403 Forbidden",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/Error"
            },
            "examples": {
              "404": {
                "$ref": "#/components/examples/403Forbidden"
              }
            }
          }
        }
      }
    }
  }
}
```

#### 404 Not Found ####

```json
{
  "components": {
    "responses": {
      "404": {
        "description": "404 Not Found",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/Error"
            },
            "examples": {
              "404": {
                "$ref": "#/components/examples/404NotFound"
              }
            }
          }
        }
      }
    }
  }
}
```

#### 409 Not Conflict ####

```json
{
  "components": {
    "responses": {
      "409": {
        "description": "409 Conflict",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/Error"
            },
            "examples": {
              "409": {
                "$ref": "#/components/examples/409Conflict"
              }
            }
          }
        }
      }
    }
  }
}
```

#### 500 Internal Server Error ####

```json
{
  "components": {
    "responses": {
      "500": {
        "description": "500 Internal Server Error",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/Error"
            },
            "examples": {
              "500": {
                "$ref": "#/components/examples/500InternalServerError"
              }
            }
          }
        }
      }
    }
  }
}

```

### Examples ###

```json
{
  "components": {
    "examples": {
      "TokenRevoke": {
        "value": {
          "access_token": "eyJraWQiOiIyeFFFVkNVbERkNzdBSXZHaTcyS1lobkI1V0J3UFVpM29ISEJkY0RhY0VBIiwiYWxnIjoiUlMyNTYifQ.eyJ2ZXIiOjEsImp0aSI6IkFULnNOdDZhZFdFOFl4ZlowTWg3MWYzQ0lVU0Z6a2RrSmc3TU1YYkdTU1o3b0EiLCJpc3MiOiJodHRwczovL3NhbWJhc2FmZXR5LWRlbW8ub2t0YS5jb20vb2F1dGgyL2RlZmF1bHQiLCJhdWQiOiJhcGk6Ly9kZWZhdWx0IiwiaWF0IjoxNjY2MzEyMzI1LCJleHAiOjE2NjYzMTU5MjUsImNpZCI6IjBvYW1rc2t6eHNoTU1Vcm5zMzU3Iiwic2NwIjpbIkFQSSJdLCJzdWIiOiIwb2Fta3NrenhzaE1NVXJuczM1NyIsIm5hbWUiOiJhcGkiLCJncm91cHMiOlsicmVzX2xpY2Vuc2VfbnVtYmVyX3NlYXJjaCJdLCJhY2Nlc3NDdXN0b21lcklkIjoxOTQsInFhbiI6IlE3NjkyNjIzODkifQ.MAjDBfVM-aw3zKlx8BJ8tWkfmSseon7uTE_Ws2Dq0iwjZf05DkEjELTKBKxJ1h3J1TAdinf5Jre5hOb5EUP-6h0WveU6vmRlgSeJekR86GCZ2t-V67QdJmkT8WrYBWPV_1JObwylyr1wh0RJ3Z050CrpgbMbreiUCiZegsN64NxcKANB1LMzcjT3Zw6OAmlNA6nJhEuWpI_qDN4OeXYsMhnzgJ090TvaLK_fF7Vf_XjJUYCI_mw3xyq55fqq8f3LiZdQ_Hn18ZJd0L-U4UtlOU0F9pyRpZXT-nC4cKaJ0LoddgINlB7jXnj6Ftj8Sl8TFpNqovxqbXazVq64VkMSVw"
        }
      },
      "TokenGranted": {
        "value": {
          "access_token": "eyJraWQiOiIyeFFFVkNVbERkNzdBSXZHaTcyS1lobkI1V0J3UFVpM29ISEJkY0RhY0VBIiwiYWxnIjoiUlMyNTYifQ.eyJ2ZXIiOjEsImp0aSI6IkFULnNOdDZhZFdFOFl4ZlowTWg3MWYzQ0lVU0Z6a2RrSmc3TU1YYkdTU1o3b0EiLCJpc3MiOiJodHRwczovL3NhbWJhc2FmZXR5LWRlbW8ub2t0YS5jb20vb2F1dGgyL2RlZmF1bHQiLCJhdWQiOiJhcGk6Ly9kZWZhdWx0IiwiaWF0IjoxNjY2MzEyMzI1LCJleHAiOjE2NjYzMTU5MjUsImNpZCI6IjBvYW1rc2t6eHNoTU1Vcm5zMzU3Iiwic2NwIjpbIkFQSSJdLCJzdWIiOiIwb2Fta3NrenhzaE1NVXJuczM1NyIsIm5hbWUiOiJhcGkiLCJncm91cHMiOlsicmVzX2xpY2Vuc2VfbnVtYmVyX3NlYXJjaCJdLCJhY2Nlc3NDdXN0b21lcklkIjoxOTQsInFhbiI6IlE3NjkyNjIzODkifQ.MAjDBfVM-aw3zKlx8BJ8tWkfmSseon7uTE_Ws2Dq0iwjZf05DkEjELTKBKxJ1h3J1TAdinf5Jre5hOb5EUP-6h0WveU6vmRlgSeJekR86GCZ2t-V67QdJmkT8WrYBWPV_1JObwylyr1wh0RJ3Z050CrpgbMbreiUCiZegsN64NxcKANB1LMzcjT3Zw6OAmlNA6nJhEuWpI_qDN4OeXYsMhnzgJ090TvaLK_fF7Vf_XjJUYCI_mw3xyq55fqq8f3LiZdQ_Hn18ZJd0L-U4UtlOU0F9pyRpZXT-nC4cKaJ0LoddgINlB7jXnj6Ftj8Sl8TFpNqovxqbXazVq64VkMSVw",
          "scope": "read:spacecrafts",
          "token_type": "Bearer",
          "expires_in": 3600
        }
      },
      "SpacecraftWorldView4": {
        "value": {
          "id": "c0c24705-4bfd-4fe8-8a51-3537d934dbf3",
          "name": "WorldView 4",
          "type": "satellite",
          "description": "WorldView-4 was launched on 11 November 2016 at 18:30:33 UTC from Vandenberg Air Force Base Space Launch Complex"
        }
      },
      "400BadRequest": {
        "value": {
          "code": "400",
          "summary": "Bad Request",
          "message": "We can't understand your message, please fix!"
        }
      },
      "401Unauthorized": {
        "value": {
          "code": "401",
          "summary": "Unauthorized",
          "message": "Access denied"
        }
      },
      "403Forbidden": {
        "value": {
          "code": "403",
          "summary": "Forbidden",
          "message": "You don't have Clearance / Clarence!"
        }
      },
      "404NotFound": {
        "value": {
          "code": "404",
          "summary": "Not Found",
          "message": "The Spacecraft you ask for is Lost in Space!"
        }
      },
      "409Conflict": {
        "value": {
          "code": "409",
          "summary": "Conflict",
          "message": "The Satellite is out of position, and can't complete your message. Try again at a later time."
        }
      },
      "500InternalServerError": {
        "value": {
          "code": "500",
          "summary": "Internal Server Error",
          "message": "Houston, We have a problem!!!"
        }
      }
    }
  }
}

```
