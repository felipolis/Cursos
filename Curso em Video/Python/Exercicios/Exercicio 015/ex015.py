# Escreva um programa que pergunte a quantidade de Km percorridos por um carro alugado e a quantidade
# de dias pelos quais ele foi alugado. Calcule o preço a pagar, sabendo que o carro custa R$60 por dia
# e R$0.15 por Km rodado.

d = float(input("Digite a quantidade de Km percorrido: "))
t = int(input("Digite a quantidade de dias pelos quais o carro foi alugado: "))
p = (d * 0.15) + (t * 60)
print(f"Total a pagar: R${p}")
