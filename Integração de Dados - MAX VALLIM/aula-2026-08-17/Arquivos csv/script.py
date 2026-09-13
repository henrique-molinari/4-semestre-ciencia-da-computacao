import pandas as pd
from sqlalchemy import create_engine

engine = create_engine("sqlite:///aula17082026a.db")

arquivos = ["NCM.csv", "produtos.csv", "vendas.csv"]

for arquivo in arquivos:

    tabela = arquivo.replace(".csv", "")

    df = pd.read_csv(arquivo, sep=";", encoding="latin1")

    df.to_sql(tabela, engine, if_exists="replace", index=False)

    print(f"{tabela} importada")
  