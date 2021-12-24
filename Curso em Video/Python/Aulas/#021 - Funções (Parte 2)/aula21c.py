# Parametros opcionais


def somar(a=0, b=0, c=0):
    """
    -> Faz a soma de tres valores e mostra o resultado na tela
    :param a: o primeiro valor
    :param b: o segundo valor
    :param c: o terceiro valor
    :return: sem retorno
    """
    s = a + b + c
    print(f"A soma vale {s}")


somar()
somar(3, 4, 6)
somar(2, 1)
