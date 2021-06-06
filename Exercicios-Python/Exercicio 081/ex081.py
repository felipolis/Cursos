"""
    Crie um programa que vai ler vários números e colocar em uma lista. Depois disso, mostre:
    A) Quantos números foram digitados.
    B) A lista de valores, ordenada de forma decrescente.
    C) Se o valor 5 foi digitado e está ou não na lista.

"""

numeros = list()
while True:
    numeros.append(int(input("Digite um numero: ")))
    escolha = str(input("Deseja continuar? [S/N] "))
    if escolha in "Nn":
        break

print(f"Foram digitados {len(numeros)} numeros")
numeros.sort(reverse=True)
print(f"Os valores em ordem decrescente são: {numeros}")
if 5 in numeros:
    print("O valor 5 faz parte da lista")
else:
    print("O valor 5 não foi encontrado...")
