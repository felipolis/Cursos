# Escreva um programa que leia a velocidade de um carro.
# Se ele ultrapassar 80Km/h, mostre uma mensagem dizendo que ele foi multado.
# A multa vai custar R$7.00 por cada Km acima do limite.

vel = float(input("Qual a sua velocidade? "))

if vel > 80:
    multa = (vel - 80) * 7
    print(f"VOCÊ FOI MULTADO EM {multa} REAIS!")
else:
    print(f"VOCÊ NÃO FOI MULTADO")
