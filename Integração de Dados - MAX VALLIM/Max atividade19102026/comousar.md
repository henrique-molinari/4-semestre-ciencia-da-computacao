No terminal do VS Code:


cd C:\Users\henri\OneDrive\Desktop\atividade19102026\ProjetoOFX
venv\Scripts\activate
python api.py
Se for a primeira vez ou o venv for novo, rode pip install -r requirements.txt antes do python api.py

O backend está rodando quando aparecer algo como Running on http://127.0.0.1:5000. Deixe esse terminal aberto. Se fechar, a API para.

Para o front, abra um segundo terminal (ícone + no painel do terminal):


cd C:\Users\henri\OneDrive\Desktop\atividade19102026\ProjetoOFX\frontend
npm install
npm run dev
Depois abra http://localhost:5173. O npm install só é necessário na primeira vez.

Para testar o backend sozinho, abra http://localhost:5000/api/resumo no navegador. Deve aparecer um JSON com os totais. Se aparecer erro de conexão, confira o .env (senha do Neon).