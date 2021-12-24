"""
    Escreva um programa para aprovar o emprestimo bancario para a compra de uma casa. O programa
vai perguntar o valor da casa, o salario do comprador e em quantos anos ele vai pagar.

    Calcule o valor da prestação mensal, sabendo que ela nao pode exceder 30% do salario ou entao
o emprestimo será negado.

"""

valorcasa = float(input("Qual é o valor da casa? "))
salario = float(input("Qual é o valor do seu salario? "))
anos = int(input("Em quantos anos você vai pagar? "))

pmensal = valorcasa / (anos * 12)
minimo = salario * 0.3

print(f"Para pagar uma casa de {valorcasa} em {anos} anos a prestação será de {pmensal}")

if pmensal <= minimo:
    print("Emprestimo CONCEDIDO!")
else:
    print("Emprestimo NEGADO!")
