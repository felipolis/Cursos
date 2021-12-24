from selenium.webdriver import Firefox
from time import sleep

browser = Firefox()
browser.get('https://selenium.dunossauro.live/exercicio_05.html')
sleep(3)

lista = ['l0c0', 'l0c1', 'l1c0', 'l1c1']

for i in range(0, 4):
    nome = browser.find_element_by_css_selector(f'.form-{lista[i]} input[type="text"]').send_keys('Felipe')
    sleep(1)
    senha = browser.find_element_by_css_selector(f'.form-{lista[i]} input[type="password"]').send_keys('123456')
    sleep(1)
    clica = browser.find_element_by_css_selector(f'.form-{lista[i]} input[type="submit"]').click()
    sleep(3)
