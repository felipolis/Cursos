from selenium.webdriver import Firefox
from time import sleep
from selenium.webdriver.support.events import (
    AbstractEventListener,
    EventFiringWebDriver
)


class Escuta(AbstractEventListener):
    def before_click(self, element, driver):
        if element.tag_name == 'input':
            if element.get_attribute('id') == 'nome':
                print(driver.find_element_by_id('lnome').text)
                print(f"Antes do click no {element.tag_name}")
            elif element.get_attribute('id') == 'email':
                print(driver.find_element_by_id('lemail').text)
                print(f"Antes do click no {element.tag_name}")
            elif element.get_attribute('id') == 'senha':
                print(driver.find_element_by_id('lsenha').text)
                print(f"Antes do click no {element.tag_name}")

    def after_click(self, element, driver):
        if element.tag_name == 'input':
            if element.get_attribute('id') == 'nome':
                print(driver.find_element_by_id('lnome').text)
                print(f"Depois do click no {element.tag_name}")
            elif element.get_attribute('id') == 'email':
                print(driver.find_element_by_id('lemail').text)
                print(f"Depois do click no {element.tag_name}")
            elif element.get_attribute('id') == 'senha':
                print(driver.find_element_by_id('lsenha').text)
                print(f"Depois do click no {element.tag_name}")


browser = Firefox()
wrap_browser = EventFiringWebDriver(browser, Escuta())
wrap_browser.get('https://selenium.dunossauro.live/exercicio_07')

sleep(2)
nome = wrap_browser.find_element_by_css_selector('input[id="nome"]')
email = wrap_browser.find_element_by_css_selector('input[id="email"]')
senha = wrap_browser.find_element_by_css_selector('input[id="senha"]')
botao = wrap_browser.find_element_by_css_selector('input[id="btn"]')

tit = wrap_browser.find_element_by_tag_name('legend')

print("---------")
nome.click()
nome.send_keys('Felipe')
tit.click()
print("---------")
email.click()
email.send_keys('teste@gmail.com')
tit.click()
print("---------")
senha.click()
senha.send_keys('13579')
tit.click()
print("---------")
sleep(3)
try:
    botao.click()
except:
    print("Click")
