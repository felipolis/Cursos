"""
    Faça um programa que mostre a tabuada de vários números, um de cada vez, para cada valor digitado
pelo usuário. O programa será interrompido quando o número solicitado for negativo.

"""

while True:
    n = int(input("Você quer ver a tabuada de qual valor? "))
    print("-" * 30)
    if n < 0:
        break
    else:
        c = 0
        for c in range(1, 11):
            print(f"{n} x {c:2} = {n * c}")
        print("-" * 30)
print("Tabuada finalizada!")
print("-" * 30)
