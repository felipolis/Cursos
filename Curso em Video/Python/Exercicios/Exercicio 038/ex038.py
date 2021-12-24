"""
    Escreva um programa que leia dois numeros inteiros e comprare-os, mostrando na tela uma mensagem:
    - O primeiro valor é maior
    - O segundo valor é maior
    - Não existe valor maior, os dois sao iguais
"""

n1 = int(input("Digite o primeiro numero: "))
n2 = int(input("Digite o segundo numero: "))

if n1 > n2:
    print("O primeiro numero é o MAIOR!")
elif n2 > n1:
    print("O segundo numero é o MAIOR!")
else:
    print("Não existe valor maior, os dois sao IGUAIS")
