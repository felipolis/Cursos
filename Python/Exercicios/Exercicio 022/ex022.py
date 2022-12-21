# Crie um programa que leia o nome completo de uma pessoa e mostre
# - O nome com todas as letras maiusculas
# - O nome com todas as letras minusculas
# - Quantas letras no total (sem considerar espaços)
# - Quantas letras tem o primeiro nome

nome = str(input("Digite seu nome completo: ")).strip()

print(nome.upper())

print(nome.lower())

print(len(nome) - nome.count(" "))

nomecortado = nome.split()
print(len(nomecortado[0]))
