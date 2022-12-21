try:
    a = int(input("Numerador: "))
    b = int(input("Denominador: "))
    r = a / b
except (ValueError, TypeError):
    print(f"Tivemos um problema com os tipos de dados que você digitou.")
except ZeroDivisionError:
    print("Não é possivel dividir um numero por zero!")
except KeyboardInterrupt:
    print("O usuario preferiu não informar os dados!")
except Exception as erro:
    print(f"O erro encontrado foi {erro.__cause__}")
else:
    print(f"O resuldado é {r:.1f}")
finally:
    print("Volte sempre! Muito obrigado!")
