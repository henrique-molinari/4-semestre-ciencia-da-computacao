import sqlite3
import csv
import os

def db_para_csv(caminho_db, caminho_csv, tabela=None):
    conexao = sqlite3.connect(caminho_db)
    cursor = conexao.cursor()

    # Se não informar a tabela, pega a primeira tabela do banco
    if not tabela:
        cursor.execute("SELECT name FROM sqlite_master WHERE type='table';")
        tabelas = cursor.fetchall()
        if not tabelas:
            print("Nenhuma tabela encontrada no banco.")
            return
        tabela = tabelas[0][0]
        print(f"Nenhuma tabela especificada. Usando a primeira encontrada: '{tabela}'")

    cursor.execute(f"SELECT * FROM {tabela}")
    linhas = cursor.fetchall()
    colunas = [descricao[0] for descricao in cursor.description]

    with open(caminho_csv, "w", newline="", encoding="utf-8") as arquivo_csv:
        escritor = csv.writer(arquivo_csv)
        escritor.writerow(colunas)
        escritor.writerows(linhas)

    print(f"Exportado com sucesso: {caminho_csv}")
    conexao.close()


if __name__ == "__main__":
    caminho_db = input("Caminho do arquivo .db: ").strip().strip('"')
    caminho_csv = input("Caminho onde o .csv será salvo (ex: C:\\pasta\\saida.csv): ").strip().strip('"')

    if not os.path.exists(caminho_db):
        print("Arquivo .db não encontrado.")
    else:
        nome_tabela = input("Nome da tabela (Enter para usar a primeira automaticamente): ").strip()
        db_para_csv(caminho_db, caminho_csv, nome_tabela if nome_tabela else None)