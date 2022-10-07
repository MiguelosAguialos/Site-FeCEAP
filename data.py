import requests

requisicao = requests.get("http://localhost:3000/data")
print(requisicao.json())