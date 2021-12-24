# Crie um programa que leia um numero real qualquer pelo teclado e mostre na tela a sua porção inteira.
# Ex:
# Digite um numero: 6.127
# O numero 6.127 tem a parte inteira 6

from math import trunc

num = float(input("Digite um numero: "))
print(f"O numero {num} tem a parte inteira {trunc(num)}")

#ou

num = float(input("Digite um numero: "))
print(f"O numero {num} tem a parte inteira {int(num)}")


