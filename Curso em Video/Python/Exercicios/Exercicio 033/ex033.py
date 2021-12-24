# Faça um programa que leia tres numeros e mostre qual é o maior e qual é o menor.

a = float(input("Digite o primeiro numero: "))
b = float(input("Digite o segundo numero: "))
c = float(input("Digite o terceiro numero: "))

menor = a
if b < a and b < c:
    menor = b
if c < a and c < b:
    menor = c

maior = a
if b > a and b > c:
    maior = b
if c > a and c > b:
    maior = c

print(f"O menor valor digitado foi {menor}")
print(f"O maior valor digitado foi {maior}")
