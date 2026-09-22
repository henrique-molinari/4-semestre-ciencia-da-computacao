from fastapi import FastAPI
from pymongo import MongoClient
from bson import ObjectId

app = FastAPI()

client = MongoClient(
    "mongodb+srv://henriquemolinari_db_user:root@aula21092026.mp7p8kf.mongodb.net/?appName=aula21092026"
)

db = client["ecommerce"]
clientes = db["clientes"]

@app.get("/clientes")
def listar_clientes():

    dados = []

    for c in clientes.find():
        c["_id"] = str(c["_id"])
        dados.append(c)

    return dados


@app.get("/clientes/id/{id}")
def buscar_cliente(id: str):

    cliente = clientes.find_one(
        {"_id": ObjectId(id)}
    )

    if cliente:
        cliente["_id"] = str(cliente["_id"])
        return cliente

    return {"erro": "Cliente não encontrado"}


@app.get("/clientes/cidade/{cidade}")
def buscar_por_cidade(cidade: str):

    dados = []

    for c in clientes.find({"cidade": cidade}):
        c["_id"] = str(c["_id"])
        dados.append(c)

    return dados


@app.post("/clientes")
def inserir_cliente(cliente: dict):

    resultado = clientes.insert_one(cliente)

    return {
        "mensagem": "Cliente inserido",
        "id": str(resultado.inserted_id)
    }


@app.put("/clientes/{id}")
def atualizar_cliente(id: str, cliente: dict):

    resultado = clientes.update_one(
        {"_id": ObjectId(id)},
        {"$set": cliente}
    )

    return {
        "registros": resultado.modified_count
    }


@app.delete("/clientes/{id}")
def excluir_cliente(id: str):

    resultado = clientes.delete_one(
        {"_id": ObjectId(id)}
    )

    return {
        "registros": resultado.deleted_count
    }