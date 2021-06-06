# Faça um programa que leia o comprimento do cateto oposto e do cateto adjacente de um triangulo
# retangulo, calcule e mostre o comprimento da hipotenusa

import math

op = float(input("Valor do cateto oposto: "))
ad = float(input("Valor do cateto adjacente: "))

hip = math.hypot(op, ad)
print(f"Valor da hipotenusa: {hip}")
