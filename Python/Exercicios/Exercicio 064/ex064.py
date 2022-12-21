"""
    Crie um programa que leia vários números inteiros pelo teclado. O programa só vai parar quando o
usuário digitar o valor 999, que é a condição de parada. No final, mostre quantos números foram digitados
e qual foi a soma entre eles (desconsiderando o flag).

"""

total = 0
soma = 0
n = int(input("Digite um numero inteiro: "))
while n != 999:
    total += 1
    soma += n
    n = int(input("Digite um numero inteiro: "))
print(f"Você digitou {total} numeros, sendo a soma deles igual a {soma}")
