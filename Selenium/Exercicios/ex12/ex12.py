from selenium.webdriver import Firefox
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.support.expected_conditions import (
    alert_is_present,
)
from time import sleep
from urllib.parse import urlparse


def find_window(url: str):
    wids = browser.window_handles
    for window in wids:
        browser.switch_to.window(window)
        if url in browser.current_url:
            break


browser = Firefox()
wdw = WebDriverWait(browser, 60)

browser.get('https://selenium.dunossauro.live/exercicio_12.html')

sleep(5)

# Preenchendo o formulario

browser.find_element_by_css_selector('input[name="nome"]').click()
alerta = wdw.until(alert_is_present())
alerta.send_keys('Felipe')
alerta.accept()

browser.find_element_by_css_selector('input[name="email"]').click()
alerta = wdw.until(alert_is_present())
alerta.send_keys('teste@gmail.com')
alerta.accept()

browser.find_element_by_css_selector('input[name="signo"]').click()
alerta = wdw.until(alert_is_present())
alerta.send_keys('Sagitario')
alerta.accept()

# Submetendo o formulario

browser.find_element_by_css_selector('input.btn-primary').click()

# Tratando as string da primeira pagina

url_parseada = urlparse(browser.current_url)
url_organizada = url_parseada.query.split('&')
valores = ', '.join(url_organizada)
valor_tratado = valores.replace('nome=', '').replace('email=', '').replace('signo=', '').replace('%40', '@')
print(browser.current_url)
print(url_parseada)
print(url_organizada)
print(valores)
print(valor_tratado)

# Trocando de janela

find_window('popup')

# Tratando as strings da segunda pagina

lista_para_traduzir = browser.find_elements_by_css_selector('h1')
lista_traduzida = list()
for i in lista_para_traduzir:
    lista_traduzida.append(i.text)
lista_traduzida.remove(lista_traduzida[0])
print(lista_traduzida)
valorespop = ', '.join(lista_traduzida)
print(valorespop)
valorespop_tratado = valorespop.replace('Nome: ', '').replace('Email: ', '').replace('Signo: ', '')
print(valorespop_tratado)

# Garantindo que os valores são os mesmos e fechando o browser

assert valor_tratado == valorespop_tratado

browser.quit()
