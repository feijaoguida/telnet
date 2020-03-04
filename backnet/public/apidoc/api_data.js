define({ "api": [
  {
    "type": "post",
    "url": "/users",
    "title": "Users",
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
            "field": "password",
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
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "  {\n    \t\"name\":\"Teste\",\n\t    \"email\":\"teste5@teste.com.br\",\n\t    \"password\":\"123456\",\n\t    \"admin\":true\n  }",
          "type": "json"
        }
      ]
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
          "content": "HTTP/1.1 200 OK\n{\n   \"id\": \"Id do User\",\n   \"name\": \"Nome do User\",\n   \"email\": \"Email do User\",\n   \"admin\": true or false,\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserAlreadyExist",
            "description": "<p>O <code>email</code> do usuário já esta cadastrado.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./src/routes.js",
    "groupTitle": "TelNet",
    "name": "PostUsers"
  }
] });
