"""
    Refaça o DESAFIO 009, mostrando a tabuada de um número que o usuário escolher, só que agora utilizando
um laço for.

"""

num = int(input("Digite um numero: "))

for c in range(1, 11):
    print(f"{num} X {c:2} = {num * c}")
