# Faça um programa que leia algo pelo teclado e mostre na tela o seu tipo primitivo e todas as
# informações possiveis sobre ele

a = input("Digite algo: ")
print("Tipo primitivo: ", type(a))
print("Está em maiuculo? ", a.isupper())
print("É alfabetico? ", a.isalpha())
print("É alfanumerico? ", a.isalnum())
print("É numerico? ", a.isnumeric())
print("É decimal? ", a.isdecimal())
print("Está em minusculo? ", a.islower())
print("Só tem espaços? ", a.isspace())
print("Está capitalizada? ", a.istitle())
