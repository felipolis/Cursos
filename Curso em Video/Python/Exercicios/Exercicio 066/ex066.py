"""
    Crie um programa que leia números inteiros pelo teclado. O programa só vai parar quando o usuário
digitar o valor 999, que é a condição de parada. No final, mostre quantos números foram digitados e qual
foi a soma entre elas (desconsiderando o flag).

"""
s = aux = 0
while True:
    n = int(input("Digite um numero: "))
    if n == 999:
        break
    aux += 1
    s += n
print(f"Foram digitados {aux} numeros, sendo a soma de todos eles igual a {s}")