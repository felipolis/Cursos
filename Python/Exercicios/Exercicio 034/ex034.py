# Escreva um programa que pergunte o salario de um funcionario e calcule o valor de seu aumento.
# Para salarios superiores a R$1250, calcule um aumento de 10%.
# Para os inferiores ou iguais, o aumento é de 15%.

a = float(input("Digite o salario: "))

if a > 1250:
    b = a * 1.10
else:
    b = a * 1.15

print(f"Seu novo salario é de {b} Reais")
