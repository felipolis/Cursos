def funcao():
    global n1
    n1 = 4
    print(f"N1 dentro vale {n1}")


n1 = 2
funcao()
print(f"N1 fora vaale {n1}")
