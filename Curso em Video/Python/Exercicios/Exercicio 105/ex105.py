"""
    Faça um programa que tenha uma função notas() que pode receber várias notas de alunos
e vai retornar um dicionário com as seguintes informações:

    - Quantidade de notas
    - A maior nota
    - A menor nota
    - A média da turma
    - A situação (opcional)

    Adicione também as docstrings dessa função para consulta pelo desenvolvedor.

"""


def notas(*valores, sit=False):
    """
    -> Função para analisar notas e situações de varios alunos
    :param valores: uma ou mais notas dos alunos (aceita varias)
    :param sit: valor opcional, indicando se deve ou nao indicar a situação
    :return: dicionario com varias informações sobre a situação da turma
    """
    dic = dict()
    dic["total"] = len(valores)
    dic["maior"] = max(valores)
    dic["menor"] = min(valores)
    dic["media"] = sum(valores)/len(valores)
    if sit:
        if dic["media"] < 6:
            dic["situação"] = "RUIM"
        elif dic["media"] < 7:
            dic["situação"] = "RAZOAVEL"
        else:
            dic["situação"] = "EXCELENTE"
    return dic


# Programa principal
resp = notas(8, 8, 8, sit=True)
print(resp)
