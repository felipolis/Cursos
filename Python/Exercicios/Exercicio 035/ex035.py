# Desenvolva um programa que leia o comprimento de tres retas e diga ao usuario se elas podem
# ou não formar um triangulo.

a = float(input("Digite o valor do primeiro lado do triangulo: "))
b = float(input("Digite o valor do segundo lado do triangulo: "))
c = float(input("Digite o valor do terceiro lado do triangulo: "))

if a < b+c and b < a+c and c < a+b:
    print("Os segmentos acima PODEM FORMAR triangulo!")
else:
    print("Os segmentos acima NÃO PODEM FORMAR triangulo")