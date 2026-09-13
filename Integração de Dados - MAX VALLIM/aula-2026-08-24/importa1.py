import pandas as pd

# ======================================
# ESCOLHA DO BANCO
# ======================================

BANCO = "sqlite"  # mysql ou sqlite

# ======================================
# CONEXÃO
# ======================================

if BANCO == "sqlite":

    import sqlite3

    conn = sqlite3.connect("aula24082026.db")

else:

    from sqlalchemy import create_engine

    conn = create_engine("mysql+mysqlconnector://root:root@localhost:3306/aula24082026")

# ======================================
# LEITOR DE CSV
# ======================================


def ler_csv(arquivo):

    for encoding in ["utf-8-sig", "utf-8", "cp1252", "latin1"]:
        try:
            return pd.read_csv(arquivo, sep=";", encoding=encoding, low_memory=False)
        except UnicodeDecodeError:
            pass

    raise Exception(f"Erro ao ler {arquivo}")


# ======================================
# ARQUIVOS
# ======================================

arquivos = {"NCM.csv": "ncm", "produtos.csv": "produtos", "vendas.csv": "vendas"}

# ======================================
# IMPORTAÇÃO
# ======================================

for arquivo, tabela in arquivos.items():

    print(f"Lendo {arquivo}...")

    df = ler_csv(arquivo)

    if tabela == "vendas":

        df["quantidadeVenda"] = (
            df["quantidadeVenda"]
            .astype(str)
            .str.replace(",", ".", regex=False)
            .astype(float)
        )

        df["totalVenda"] = (
            df["totalVenda"]
            .astype(str)
            .str.replace(",", ".", regex=False)
            .astype(float)
        )

    print(f"Gravando {tabela}...")

    df.to_sql(tabela, conn, if_exists="replace", index=False, chunksize=5000)

    print(f"{tabela} importada")

# ======================================
# FECHAMENTO
# ======================================

if BANCO == "sqlite":
    conn.close()
else:
    conn.dispose()

print("\nImportação concluída com sucesso!")
