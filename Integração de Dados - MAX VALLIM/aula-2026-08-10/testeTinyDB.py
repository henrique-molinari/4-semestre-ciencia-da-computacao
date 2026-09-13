# python testeTinyDB.py

from tinydb import TinyDB

from tinydb import Query

# # Criar banco de dados de teste
# db = TinyDB('teste.json')
# print("TinyDB instalado e funcionando corretamente!")


# # Criar ou conectar ao banco de dados
# db = TinyDB('dados.json')

# # Criar tabelas
# usuarios = db.table('usuarios')
# produtos = db.table('produtos')

# print("Tabelas criadas com sucesso!")


# def adicionar_usuario(nome, idade):
#     usuarios = TinyDB("dados.json").table("usuarios")
#     usuarios.insert({"nome": nome, "idade": idade})
#     print(f"Usuário {nome} adicionado com sucesso!")


# def adicionar_produto(nome, preco):
#     produtos = TinyDB("dados.json").table("produtos")
#     produtos.insert({"nome": nome, "preco": preco})
#     print(f"Produto {nome} adicionado com sucesso!")

# # Exemplo de uso:
# adicionar_usuario("Max", 30)
# adicionar_produto("Notebook", 2500)


def listar_usuarios():
    usuarios = TinyDB('dados.json').table('usuarios')
    print("Usuários cadastrados:")
    for usuario in usuarios.all():
        print(usuario)

def listar_produtos():
    produtos = TinyDB('dados.json').table('produtos')
    print("Produtos cadastrados:")
    for produto in produtos.all():
        print(produto)

# Exemplo de uso:
listar_usuarios()
listar_produtos()

def atualizar_usuario(nome, nova_idade):
    usuarios = TinyDB('dados.json').table('usuarios')
    query = Query()
    usuarios.update({'idade': nova_idade}, query.nome == nome)
    print(f"Usuário {nome} atualizado com sucesso!")

def atualizar_produto(nome, novo_preco):
    produtos = TinyDB('dados.json').table('produtos')
    query = Query()
    produtos.update({'preco': novo_preco}, query.nome == nome)
    print(f"Produto {nome} atualizado com sucesso!")

# Exemplo de uso:
atualizar_usuario("Max", 31)
atualizar_produto("Notebook", 2600)

print("\n")

listar_usuarios()
listar_produtos()