"""
    Crie um programa que leia o ano de nascimento de sete pessoas. No final, mostre quantas pessoas
ainda não atingiram a maioridade e quantas já são maiores.

"""
from datetime import date
aux = 0
aux2 = 0
for c in range(0, 7):
    atual = date.today().year
    ano = int(input("Digite o ano de nascimento: "))
    idade = atual - ano
    if idade >= 18:
        aux = aux + 1
    else:
        aux2 = aux2 + 1
print(f"Menores: {aux2} \nMaiores: {aux}")
