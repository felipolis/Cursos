from functools import partial
from selenium.webdriver import Firefox
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait


def esperar_elemento(by, elemento, webdriver):
    print(f'Tentando encontrar {elemento} by {by}')
    if webdriver.find_elements(by, elemento):
        print('Achoooooooooooou!')
        return True
    return False


url = 'https://selenium.dunossauro.live/exercicio_09.html'
driver = Firefox()
wdw = WebDriverWait(driver, 10)
driver.get(url)

# Esperar carregar e achar o botao

wdw.until(partial(esperar_elemento, By.CSS_SELECTOR, '.selenium'),
          'Não foi encontrado')
