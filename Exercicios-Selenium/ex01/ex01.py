"""
Crie um programa com selenium que gere um dicionário, onde a chave é a tag h1.
* O valor deve ser um novo dicionário
* Cada chave do valor deverá ser o valor de 'atributo'
* Cada valor deve ser o texto contido no elemento
"""
from selenium.webdriver import Firefox
from time import sleep

url = 'https://curso-python-selenium.netlify.app/exercicio_01.html'
navegador = Firefox()
navegador.get(url)
sleep(1)

h1 = navegador.find_element_by_tag_name('h1')
p = navegador.find_elements_by_tag_name('p')

dic = {'H1':
    {
        'texto1': p[0].text,
        'texto2': p[1].text,
        'texto3': p[2].text
    }
}

print(dic)

navegador.quit()
