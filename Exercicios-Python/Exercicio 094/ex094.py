"""
    Crie um programa que leia nome, sexo e idade de várias pessoas, guardando os dados de cada
pessoa em um dicionário e todos os dicionários em uma lista. No final, mostre:

    A) Quantas pessoas foram cadastradas
    B) A média de idade
    C) Uma lista com as mulheres
    D) Uma lista de pessoas com idade acima da média

"""

pessoa = dict()
galera = list()
soma = media = 0
while True:
    pessoa.clear()
    pessoa["nome"] = str(input("Nome: ")).strip()
    while True:
        pessoa["sexo"] = str(input("Sexo: [M/F] ")).upper().strip()[0]
        if pessoa["sexo"] in "MF":
            break
        print("ERRO! Por favor digite apenas M ou F.")
    pessoa["idade"] = int(input("Idade: "))
    soma += pessoa['idade']
    galera.append(pessoa.copy())
    while True:
        resp = str(input("Deseja continuar? [S/N] ")).upper().strip()[0]
        if resp in "SN":
            break
        print("ERRO! Por favor digite apenas S ou N: ")
    if resp == "N":
        break
print("-=" * 30)
print(f"A) Ao todo temos {len(galera)} pessoas cadastradas.")
media = soma/len(galera)
print(f"B) A media de idade é de {media:5.2f} anos")
print(f"C) As mulheres cadastradas foram ", end="")
for p in galera:
    if p["sexo"] == "F":
        print(f"{p['nome']} ", end="")
print()
print("D) Lista de pessoas que estão acima da media: ")
for p in galera:
    if p["idade"] >= media:
        print("     ")
        for k, v in p.items():
            print(f"{k} = {v}; ", end="")
        print()
print("<<ENCERRADO>>")
