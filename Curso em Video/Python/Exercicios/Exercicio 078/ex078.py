"""
    Faça um programa que leia 5 valores numéricos e guarde-os em uma lista. No final, mostre
qual foi o maior e o menor valor digitado e as suas respectivas posições na lista.

"""

valores = list()
maior = menor = 0

for count in range(0, 5):
    valores.append(int(input("Digite um numero: ")))

for c, v in enumerate(valores):
    if c == 0:
        maior = valores[c]
        menor = valores[c]
    else:
        if valores[c] < menor:
            menor = valores[c]
        elif valores[c] > maior:
            maior = valores[c]

print(f"Você digitou os valores {valores}")
print(f"O maior valor digitado foi {maior} nas posições ", end="")
for i, v in enumerate(valores):
    if v == maior:
        print(f"{i}...", end="")
print()
print(f"O menor valor digitado foi {menor} nas posições ", end="")
for i, v in enumerate(valores):
    if v == menor:
        print(f"{i}...", end="")
print()
