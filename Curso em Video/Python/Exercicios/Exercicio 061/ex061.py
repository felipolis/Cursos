"""
    Refaça o DESAFIO 051, lendo o primeiro termo e a razão de uma PA, mostrando os 10 primeiros
termos da progressão usando a estrutura while.

"""

"""n = int(input("Digite um termo: "))
r = int(input("Digite a razão da PA: "))

ultimo = n + (10 - 1) * r
primeiro = n

while primeiro <= ultimo:
    print(f"{primeiro}", end=" ")
    primeiro += r
print("Fim")"""

print("Gerador de PA")
print("-=" * 10)
primeiro = int(input("Primeiro termo: "))
razao = int(input("Razão da PA: "))
termo = primeiro
cont = 1
while cont  <= 10:
    print(f"{termo} -> ", end="")
    termo += razao
    cont += 1
print("FIM")