# Faça um programa que leia o nome completo de uma pessoa, mostrando em seguida o primeiro e o
# ultimo nome separadamente.
# Ex: Ana Maria de Souza
# primeiro: Ana
# ultimo: Souza

n = str(input("Digite seu nome completo: ")).strip()
nome = n.split()
print("Muito prazer em te conhecer!")
print(f"Primeiro nome: {nome[0]}")
print(f"Ultimo nome: {nome[len(nome)-1]}")
