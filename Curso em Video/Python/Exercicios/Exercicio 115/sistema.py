from lib.arquivo import *
from time import sleep

arq = "archanjo.txt"

if not arquivoExiste(arq):
    criarArquivo(arq)

while True:
    resposta = menu(["Ver pessoas cadastradas", "Cadastrar nova pessoa", "Sair do sistema"])
    if resposta == 1:
        # Opção de listar o conteudo do arquivo.
        lerArquivo(arq)
    elif resposta == 2:
        # Opção de cadastrar uma nova pessoa.
        cabeçalho("NOVO CADASTRO")
        nome = str(input("Nome: "))
        idade = leiaInt("Idade: ")
        cadastrar(arq, nome, idade)
    elif resposta == 3:
        # Opção de sair do sistema
        cabeçalho("Saindo do sistema... Até logo!")
        break
    else:
        # Digitou uma opção errada no menu.
        print("\033[31mERRO! Digite uma opção valida!\033[m")
    sleep(2)

