# python testepandas.py

import pandas as pd
import numpy as np


df_nulos = pd.DataFrame(
    {"A": [1, 2, np.nan, 4], "B": [5, np.nan, np.nan, 8], "C": [10, 20, 30, 40]}
)

# Verificar valores nulos
print(df_nulos.isnull())

# Remover linhas com valores nulos
print(df_nulos.dropna())

# Preencher valores nulos
print(df_nulos.fillna(value=0))

print(df_nulos)
