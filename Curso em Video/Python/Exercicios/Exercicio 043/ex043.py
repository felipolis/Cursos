"""
    Desenvolva uma lógica que leia o peso e a altura de uma pessoa, calcule seu Índice de Massa Corporal (IMC) e
mostre seu status, de acordo com a tabela abaixo:
    - IMC abaixo de 18,5: Abaixo do Peso
    - Entre 18,5 e 25: Peso Ideal
    - 25 até 30: Sobrepeso
    - 30 até 40: Obesidade
    - Acima de 40: Obesidade Mórbida

"""

peso = float(input("Peso (Kg): "))
altura = float(input("Altura (m)"))
imc = peso/(altura ** 2)

if imc < 18.5:
    print("MAGREZA!")
elif 25 > imc >= 18.5:
    print("NORMAL!")
elif 30 > imc >= 25:
    print("SOBREPESO!")
elif 40 > imc >= 30:
    print("OBESIDADE!")
elif imc >= 40:
    print("OBESIDADE MORBIDA")
