"""
    Faça um programa que leia um número inteiro e diga se ele é ou não um número primo.

"""

n = int(input("Digite um numero: "))
tot = 0
for c in range(1, n + 1):
    if n % c == 0:
        print("\033[34m", end=" ")
        tot += 1
    else:
        print("\033[33m", end=" ")
    print(f"{c}", end=" ")
print(f"\n\033[mO numero {n} foi dividido {tot} vezes")
if tot == 2:
    print("E porisso ele É PRIMO!")
else:
    print("E porisso ele NÃO É PRIMO!")