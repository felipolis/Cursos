from selenium.webdriver import Firefox
from time import sleep

browser = Firefox()
browser.get('https://selenium.dunossauro.live/exercicio_06.html')
sleep(3)

for i in range(0, 6):
    formu = browser.find_element_by_css_selector('span').text
    print(formu)

    nome = browser.find_element_by_css_selector(f'.form-{formu} input[type="text"]').send_keys('Felipe')
    sleep(2)
    senha = browser.find_element_by_css_selector(f'.form-{formu} input[type="password"]').send_keys('123456')
    sleep(2)
    clica = browser.find_element_by_css_selector(f'.form-{formu} input[type="submit"]').click()
    sleep(4)
