from selenium.webdriver import Firefox
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support.expected_conditions import (
    text_to_be_present_in_element,
    text_to_be_present_in_element_value
)

url = 'https://selenium.dunossauro.live/exercicio_11.html'
browser = Firefox()
browser.get(url)

wdw = WebDriverWait(browser, 50)

locator_h4 = (By.TAG_NAME, 'h4')

inputs = list()
keys = ['Felipe', 'teste@gmail.com', 'teste@gmail.com', '123456', '123456']

locator_nome = (By.CSS_SELECTOR, 'input[name="nome"]')
locator_email = (By.CSS_SELECTOR, 'input[name="email"]')
locator_cemail = (By.CSS_SELECTOR, 'input[name="c_email"]')
locator_senha = (By.CSS_SELECTOR, 'input[name="senha"]')
locator_csenha = (By.CSS_SELECTOR, 'input[name="c_senha"]')
locator_botao = (By.CSS_SELECTOR, 'input[name="button"]')

inputs.append(locator_nome)
inputs.append(locator_email)
inputs.append(locator_cemail)
inputs.append(locator_senha)
inputs.append(locator_csenha)

for i in range(0, 5):
    wdw.until(text_to_be_present_in_element(locator_h4, 'Digite'))
    browser.find_element(*inputs[i]).send_keys(keys[i])

wdw.until(text_to_be_present_in_element_value(locator_botao, 'disponível'))
browser.find_element(*locator_botao).click()
