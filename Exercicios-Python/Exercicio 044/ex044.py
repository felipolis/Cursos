"""
    Elabore um programa que calcule o valor a ser pago por um produto, considerando o seu preço normal e
condição de pagamento:
    - à vista dinheiro/cheque: 10% de desconto
    - à vista no cartão: 5% de desconto
    - em até 2x no cartão: preço formal
    - 3x ou mais no cartão: 20% de juros

"""

compras = float(input("Valor das compras: "))
print("""FORMAS DE PAGAMENTO
[ 1 ] à vista dinheiro/cheque
[ 2 ] à vista no cartão
[ 3 ] 2x no cartão
[ 4 ] 3x ou mais no cartão""")
escolha = int(input("Qual é a opção?"))

if escolha == 1:
    total = compras * 0.9
    print(f"sua compra de {compras} vai custar {total}")
elif escolha == 2:
    total = compras * 0.95
    print(f"sua compra de {compras} vai custar {total}")
elif escolha == 3:
    total = compras
    parcela = total/2
    print(f"Sua compra será parcelada em 2x de {parcela}")
    print(f"sua compra de {compras} vai custar {total}")
elif escolha == 4:
    total = compras * 1.20
    totparc = int(input("Quantas parcelas? "))
    parcela = total / totparc
    print(f"Sua compra será parcelada em {totparc}x de {parcela}")
    print(f"sua compra de {compras} vai custar {total}")
else:
    print("OPÇÃO INVALIDA de pagamento! Tente novamente.")