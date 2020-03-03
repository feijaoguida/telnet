define({ "api": [
  {
    "type": "post",
    "url": "/users",
    "title": "Usurs",
    "group": "TelNet",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<ul> <li>Nome do Usuário.</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<ul> <li>Email do Usuário.</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password_hash",
            "description": "<ul> <li>Password do Usuário.</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "admin",
            "description": "<ul> <li>O usuário é admin (verdadeiro ou falso)</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Mensagem usuário cadastrado com sucesso</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n{\n   \"id\": \"\",\n   \"name\": \"Nome do User\",\n   \"email\": \"Email do User\",\n   \"password_hash\": \"password_hash\",\n   \"admin\": true or false,\n   \"updatedAt\": \"Data Atualização\",\n   \"createdAt\": \"Data Criação\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./src/routes.js",
    "groupTitle": "TelNet",
    "name": "PostUsers"
  }
] });
