from selenium.webdriver import Firefox
from time import sleep
from urllib.parse import urlparse

browser = Firefox()
browser.get('https://selenium.dunossauro.live/exercicio_03.html')
sleep(3)

elemento = browser.find_element_by_tag_name('main')
ancoras = elemento.find_element_by_tag_name('a')
browser.get(ancoras.get_attribute('href'))

sleep(3)

# PAGINA 01

elemento1 = browser.find_element_by_tag_name('main')

paragrafro = elemento1.find_elements_by_tag_name('p')
print(paragrafro[1].text)
conta = paragrafro[1].text.split(' ')
print(conta)
resp = int(conta[0]) * int(conta[2])
sleep(2)
ancoras1 = elemento1.find_elements_by_tag_name('a')
for ancora in ancoras1:
    sleep(2)
    if ancora.text != str(resp):
        browser.get(ancora.get_attribute('href'))
        break
sleep(30)

# PAGINA 02

elemento2 = browser.find_element_by_tag_name('main')
ancoras2 = elemento2.find_elements_by_tag_name('a')
for ancora in ancoras2:
    if browser.title == ancora.text:
        browser.get(ancora.get_attribute('href'))
        break
sleep(3)

# PAGINA 03

url_parseada = urlparse(browser.current_url)
elemento3 = browser.find_element_by_tag_name('main')
ancoras3 = elemento3.find_elements_by_tag_name('a')
for ancora in ancoras3:
    if ancora.text in url_parseada.path:
        browser.get(ancora.get_attribute('href'))
        break
sleep(3)

# PAGINA 04

browser.refresh()

