pessoas = {"nome": "Gustavo", "sexo": "M", "idade": 22}
print(pessoas)
print(pessoas["idade"])
print(f"O {pessoas['nome']} tem {pessoas['idade']} anos.")
print(pessoas.keys())
print(pessoas.values())
print(pessoas.items())
pessoas["nome"] = "Leandro"
pessoas["peso"] = 98.5
# del pessoas[sexo]
for k in pessoas.keys():
    print(k)

for k in pessoas.values():
    print(k)

for k, v in pessoas.items():
    print(f"{k} = {v}")
