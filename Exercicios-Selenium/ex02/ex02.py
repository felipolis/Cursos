"""
Crie um programa com selenium que
* Jogue o jogo
* Quando você ganhar o script deve parar de ser executado
"""
from selenium.webdriver import Firefox
from time import sleep

url = 'https://curso-python-selenium.netlify.app/exercicio_02.html'
navegador = Firefox()
navegador.get(url)
sleep(1.5)

a = navegador.find_element_by_id('ancora')
p = navegador.find_elements_by_tag_name('p')

numero_esperado = int(p[1].text.split(' ')[-1])
print(numero_esperado)

while True:
    a.click()
    p = navegador.find_elements_by_tag_name('p')
    if p[-1].text == f"Você ganhou: {numero_esperado}":
        break
