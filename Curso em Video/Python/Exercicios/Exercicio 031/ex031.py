# Desenvolva um programa que pergunte a distancia de uma viagem em Km. Calcule o preço da passagem,
# cobrando R$0.50 por Km para viagens de até 200Km e R$0.45 para viagens ,mais longas.

d = float(input("Qual a distancia da viagem? "))

if d <= 200:
    p = d * 0.50
else:
    p = d * 0.45
print(f"O valor da passagem é de {p} Reais")
