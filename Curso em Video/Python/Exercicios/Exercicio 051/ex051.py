"""
    Desenvolva um programa que leia o primeiro termo e a razão de uma PA. No final, mostre os 10
primeiros termos dessa progressão.

"""

n = int(input("Digite um termo: "))
r = int(input("Digite a razão da PA: "))

ultimo = n + (10 - 1) * r

for c in range(n, ultimo + r, 2):
    print(f"{c}", end=" ")
