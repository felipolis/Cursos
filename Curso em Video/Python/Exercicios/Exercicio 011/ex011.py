# Faça um programa que leia a largura e a altura de uma parede em metros, calcule a sua area e a
# quantidade de tinta necessaria para pinta-la, sabendo que cada litro de tinta pinta uma area de
# 2 metros quadrados.

a = float(input("Digite a largura da parede: "))
b = float(input("Digite a altura da parede: "))
area = a*b
print(f"A area da parede é de {area} metros quadrados")
print(f"Será necessario {area/2} litros de tinta para pintar a parede!")
