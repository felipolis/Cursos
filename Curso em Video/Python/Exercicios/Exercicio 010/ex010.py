# Crie um programa que leia quanto dinheiro uma pessoa tem na carteira e mostre quantos dolares ela
# pode comprar. Considere US$1,00 = R$3,27

n = float(input("Digite o valor em reais que você tem na carteira: "))
dol = n/3.27
print(f"Você pode comprar {dol:.2f} Dolares!")
