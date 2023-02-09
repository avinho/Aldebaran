# App Lançamentos Financeiros

## Infra

- Banco Postgres

## Endpoints

### - Consulta do balanço de saldo por id do cliente

GET /clients/{client-id}/balance

```json
{
    "balance": 500,
    "from": "2023-02-01T00:00:00"
}
```

### - Consulta de lançamentos por id do cliente 

GET /clients/{client-id}/transactions

```json
{
    "transactions": {
        "2023-02-03": [
            {
                "description": "pizzaria",
                "value": -52,
                "type": "debit"

            }
        ],
        "2023-03-01": [
            {
                "description": "salary",
                "value": 1500,
                "type": "credit"
            }
        ]
    }
}
```

### - Solicita criação de arquivo CSV com historico de lançamentos

POST /clients/{client-id}/transactions/history 


### - Download de arquivo com lançamentos 

GET /clients/{client-id}/transactions/download


## Requisitos de negócios

- Armazenar saldo
- Api deve ter paginação e filtros
- Endpoint para gerar arquivo CSV com lançamentos
- Endpoint para fazer download dessa solicitação :heavy_check_mark:
- Endpoint para upload de arquivos para adicionar lançamentos
- Registros stateless, lançamento é unico de acordo com a data, descrição, tipo e valor

