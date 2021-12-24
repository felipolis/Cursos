lanche = ("Hamburguer", "Suco", "Pizza", "Pudim")
for comida in lanche:
    print(f"Eu vou comer {comida}")
print("Comi pra caramba!")

#OU

for pos, comida in enumerate(lanche):
    print(f"Eu vou comer {comida} na posição {pos}")
print("Comi pra caramba!")

#OU

for cont in range(0, len(lanche)):
    print(f"Eu vou comer {lanche[cont]} na posição {cont}")
print("Comi pra caramba!")
