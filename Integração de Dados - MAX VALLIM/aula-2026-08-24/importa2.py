import pandas as pd

print("=" * 60)
print("ETL - EXTRAÇÃO, TRANSFORMAÇÃO E CARGA")
print("=" * 60)

# =====================================================
# CONFIGURAÇÃO
# =====================================================

BANCO = "sqlite"  # sqlite ou mysql

# =====================================================
# CONEXÃO
# =====================================================

if BANCO.lower() == "sqlite":

    import sqlite3

    conn = sqlite3.connect("aula24082026.db")

else:

    from sqlalchemy import create_engine

    conn = create_engine(
        "mysql+mysqlconnector://root:SUA_SENHA@localhost:3306/aula24082026"
    )

print(f"\nBanco destino: {BANCO.upper()}")

# =====================================================
# LEITURA ROBUSTA
# =====================================================

def ler_csv(arquivo):

    encodings = [
        "utf-8-sig",
        "utf-8",
        "cp1252",
        "latin1"
    ]

    for encoding in encodings:

        try:

            print(f"Lendo {arquivo} ({encoding})")

            return pd.read_csv(
                arquivo,
                sep=";",
                encoding=encoding,
                low_memory=False
            )

        except UnicodeDecodeError:
            continue

    raise Exception(f"Não foi possível ler {arquivo}")

# =====================================================
# EXTRAÇÃO
# =====================================================

print("\nEXTRAÇÃO")

ncm = ler_csv("NCM.csv")
produtos = ler_csv("produtos.csv")
vendas = ler_csv("vendas.csv")

print("\nRegistros encontrados:")

print(f"NCM      : {len(ncm):,}")
print(f"Produtos : {len(produtos):,}")
print(f"Vendas   : {len(vendas):,}")

# =====================================================
# TRANSFORMAÇÃO - PRODUTOS
# =====================================================

print("\nTransformando PRODUTOS...")

produtos.columns = produtos.columns.str.strip()

produtos["codigoProduto"] = (
    produtos["codigoProduto"]
    .astype(str)
    .str.strip()
)

produtos["descricaoProduto"] = (
    produtos["descricaoProduto"]
    .astype(str)
    .str.strip()
    .str.upper()
)

produtos["unidadeProduto"] = (
    produtos["unidadeProduto"]
    .astype(str)
    .str.strip()
    .str.upper()
)

produtos["NCMProduto"] = (
    produtos["NCMProduto"]
    .astype(str)
    .str.strip()
    .str.replace(r"\D", "", regex=True)
)

qtd_produtos_antes = len(produtos)

produtos = produtos.drop_duplicates(
    subset=["codigoProduto"]
)

print(
    f"Duplicidades removidas: "
    f"{qtd_produtos_antes - len(produtos)}"
)

# =====================================================
# TRANSFORMAÇÃO - NCM
# =====================================================

print("\nTransformando NCM...")

ncm.columns = ncm.columns.str.strip()

ncm["NCM"] = (
    ncm["NCM"]
    .astype(str)
    .str.strip()
    .str.replace(r"\D", "", regex=True)
)

ncm["DESCRICAO"] = (
    ncm["DESCRICAO"]
    .astype(str)
    .str.strip()
)

qtd_ncm_antes = len(ncm)

ncm = ncm.drop_duplicates()

print(
    f"Duplicidades removidas: "
    f"{qtd_ncm_antes - len(ncm)}"
)

# =====================================================
# TRANSFORMAÇÃO - VENDAS
# =====================================================

print("\nTransformando VENDAS...")

vendas.columns = vendas.columns.str.strip()

vendas["codigoProduto"] = (
    vendas["codigoProduto"]
    .astype(str)
    .str.strip()
)

vendas["quantidadeVenda"] = pd.to_numeric(
    vendas["quantidadeVenda"]
        .astype(str)
        .str.replace(",", ".", regex=False),
    errors="coerce"
)

vendas["totalVenda"] = pd.to_numeric(
    vendas["totalVenda"]
        .astype(str)
        .str.replace(",", ".", regex=False),
    errors="coerce"
)

vendas["dataVenda"] = pd.to_datetime(
    vendas["dataVenda"],
    errors="coerce"
)

qtd_vendas_antes = len(vendas)

vendas = vendas.dropna(
    subset=[
        "dataVenda",
        "codigoProduto"
    ]
)

print(
    f"Registros inválidos removidos: "
    f"{qtd_vendas_antes - len(vendas)}"
)

# =====================================================
# AUDITORIA
# =====================================================

print("\nAUDITORIA")

print(f"NCM finais      : {len(ncm):,}")
print(f"Produtos finais : {len(produtos):,}")
print(f"Vendas finais   : {len(vendas):,}")

print(
    f"NCM vazios: "
    f"{ncm['NCM'].eq('').sum():,}"
)

print(
    f"Produtos sem NCM: "
    f"{produtos['NCMProduto'].eq('').sum():,}"
)

# =====================================================
# EXPORTAÇÃO DOS CSV LIMPOS
# =====================================================

print("\nGerando CSVs limpos...")

ncm.to_csv(
    "ncm_limpo.csv",
    sep=";",
    index=False,
    encoding="utf-8-sig"
)

produtos.to_csv(
    "produtos_limpo.csv",
    sep=";",
    index=False,
    encoding="utf-8-sig"
)

vendas.to_csv(
    "vendas_limpo.csv",
    sep=";",
    index=False,
    encoding="utf-8-sig"
)

# =====================================================
# CARGA
# =====================================================

print("\nCARGA")

print("Gravando NCM...")
ncm.to_sql(
    "ncm",
    conn,
    if_exists="replace",
    index=False
)

print("Gravando PRODUTOS...")
produtos.to_sql(
    "produtos",
    conn,
    if_exists="replace",
    index=False
)

print("Gravando VENDAS...")
vendas.to_sql(
    "vendas",
    conn,
    if_exists="replace",
    index=False,
    chunksize=50000
)

# =====================================================
# ENCERRAMENTO
# =====================================================

if BANCO.lower() == "sqlite":
    conn.close()
else:
    conn.dispose()

print("\n" + "=" * 60)
print("ETL CONCLUÍDO COM SUCESSO")
print("=" * 60)

print("\nArquivos gerados:")
print(" - ncm_limpo.csv")
print(" - produtos_limpo.csv")
print(" - vendas_limpo.csv")

print("\nTabelas criadas:")
print(" - ncm")
print(" - produtos")
print(" - vendas")

print(f"\nBanco utilizado: {BANCO.upper()}")