a = [2, 3, 4, 7]

# b = a ---> Ligação entre as listas
# b = a[:] ----> Faz uma copia de a em b

b = a[:]
b[2] = 8
print(f"Lista A: {a}")
print(f"Lista B: {b}")
