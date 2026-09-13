# python testeSqlLite.py

import sqlite3

# Criar ou conectar ao banco local
conexao = sqlite3.connect("integracao_dados.db")
cursor = conexao.cursor()

# Criar tabela para consolidar dados
cursor.execute("""
CREATE TABLE IF NOT EXISTS dados (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    fonte TEXT NOT NULL,
    dado TEXT NOT NULL
)
""")
print("Tabela criada com sucesso para integração!")
conexao.close()

# CREATE
def adicionar_dado(fonte, dado):
    conexao = sqlite3.connect("integracao_dados.db")
    cursor = conexao.cursor()
    cursor.execute("INSERT INTO dados (fonte, dado) VALUES (?, ?)", (fonte, dado))
    conexao.commit()
    print(f"Dado da fonte {fonte} adicionado com sucesso!")
    conexao.close()


def listar_dados():
    conexao = sqlite3.connect("integracao_dados.db")
    cursor = conexao.cursor()
    cursor.execute("SELECT * FROM dados")
    registros = cursor.fetchall()
    for registro in registros:
        print(registro)
    conexao.close()

# Exemplo de uso:
listar_dados()

# def atualizar_dado(id, nova_fonte, novo_dado):
#     conexao = sqlite3.connect("integracao_dados.db")
#     cursor = conexao.cursor()
#     cursor.execute("UPDATE dados SET fonte = ?, dado = ? WHERE id = ?", (nova_fonte, novo_dado, id))
#     conexao.commit()
#     print(f"Dado de ID {id} atualizado com sucesso!")
#     conexao.close()

# # Exemplo de uso:
# atualizar_dado(1, "Fonte Atualizada", '{"nome": "Maximilian", "idade": 31}')

listar_dados()