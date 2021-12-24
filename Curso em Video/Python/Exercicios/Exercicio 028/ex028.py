# Escreva um programa que faça o computador "pensar" em um numero inteiro entre 0 e 5 e peça
# para o usuario tentar descobrir qual foi o numero escolhido pelo computador.
# O programa deverá escrever na tela se o usuario venceu ou perdeu.

import random

a = random.randint(1, 5)

b = int(input("Digite um numero entre 1 e 5: "))

if b == a:
    print("PARABENS! VOCÊ ACERTOU!")
else:
    print(f"ERRRROUUU! O CERTO ERA {a}!")

print("===FIM DE JOGO===")