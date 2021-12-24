"""
    Faça um programa que tenha uma função chamada área(), que receba as dimensões de um
terreno retangular (largura e comprimento) e mostre a área do terreno.

"""


def area(larg, comp):
    area = larg * comp
    print(f"A area de um terreno {larg} X {comp} é de {area}m2")


# Programa Principal
print("CONTROLE DE TERRENOS")
print("-" * 30)

l = float(input("LARGURA (m): "))
c = float(input("COMPRIMENTO (m): "))

area(l, c)
