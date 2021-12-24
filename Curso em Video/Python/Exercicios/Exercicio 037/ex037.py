"""
    Escreva um programa que leia um numero inteiro qualquer e peça para o usuario escolher qual será
a base de conversão:
    - 1 para binario
    - 2 para octal
    - 3  para hexadecimal
"""

num = int(input("Digite um numero inteiro: "))
print("""Escolha uma das bases de conversão:
[ 1 ] Converter para BINARIO
[ 2 ] Converter para OCTAL
[ 3 ] Converterpara HEXADECIMAL""")
opcao = int(input("Sua opção: "))
if num == 1:
    print(f"{num} convertido para BINARIO é igual a {bin(num)}")
elif num == 2:
    print(f"{num} convertido para OCTAL é igual a {oct(num)}")
elif num == 3:
    print(f"{num} convertido para EXADECIMAL é igual a {hex(num)}")
else:
    print("Opção invalida! Tente novamente.")
