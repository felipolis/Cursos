from selenium.webdriver import Firefox
from time import sleep
from urllib.parse import urlparse
from json import loads

url = 'https://selenium.dunossauro.live/exercicio_04.html'

firefox = Firefox()

firefox.get(url)


# nome, email, senha, telefone, btn


def preenche_form(browser, nome, email, senha, telefone):
    browser.find_element_by_name('nome').send_keys(nome)
    browser.find_element_by_name('email').send_keys(email)
    browser.find_element_by_name('senha').send_keys(senha)
    browser.find_element_by_name('telefone').send_keys(telefone)
    browser.find_element_by_name('btn').click()


sleep(2)

estrutura = {
    'nome': 'Eduardo',
    'email': 'dudu@du.edu',
    'senha': 'q1w2e3r4',
    'telefone': '987654321'
}

preenche_form(firefox, **estrutura)

sleep(2)

# Transformando o query da url em string

url_parseada = urlparse(firefox.current_url)
url_organizada = url_parseada.query.split('&')
list = url_organizada

sleep(2)

list.remove(list[4])

valores = ', '.join(list)

valor_tratado = ("{\'{0}\'}".format(valores
                                    .replace('=', ':')
                                    .replace('%40', '@')
                                    .replace(',', "','")
                                    .replace(' ', "")
                                    .replace(":", "': '")
                                    .replace("',", "', ")))

print(list)
print(valores)
print(valor_tratado)

sleep(2)

# Pegando o valor em resultado

texto_resultado = firefox.find_element_by_tag_name('textarea').text
resultado_arrumado = texto_resultado.replace('\'', "\"")

dic_result = str(loads(resultado_arrumado))

sleep(2)

print(dic_result)

print(type(dic_result))
print(type(valor_tratado))

sleep(3)

assert dic_result == valor_tratado

firefox.quit()
