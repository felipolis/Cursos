"""
    Crie um programa que leia duas notas de um aluno e calcule sua media, mostrando uma mensagem
no dinal, de acordo com a media atingida:
    - Média abaixo de 5.0: REPROVADO
    - Média entre 5.0 e 6.9: RECUPERAÇÃO
    - Média 7.0 ou superior: APROVADO

"""

n1 = float(input("Digite a primeira nota: "))
n2 = float(input("Digite a segunda nota: "))

media = (n1 + n2) / 2
print(f"Sua média foi de {media}")

if media < 5.0:
    print(f"REPROVADO")
elif 5 <= media < 7:
    print("RECUPERAÇÃO")
elif media >= 7:
    print("APROVADO")
