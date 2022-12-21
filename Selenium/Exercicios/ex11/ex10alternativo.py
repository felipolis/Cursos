from selenium.webdriver import Firefox
from time import sleep
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support.expected_conditions import (
    presence_of_element_located
)


def tarefa(driver, nome, descricao):
    driver.find_element_by_id('todo-name').send_keys(nome)
    sleep(1)
    driver.find_element_by_id('todo-desc').send_keys(descricao)
    sleep(1)
    driver.find_element_by_id('todo-submit').click()
    sleep(1)


url = 'https://selenium.dunossauro.live/exercicio_10.html'
browser = Firefox()
browser.get(url)

wdw = WebDriverWait(browser, 10)

locator_botao = (By.CSS_SELECTOR, '.buttons .btn-primary')

# Preenchendo formulario

tarefa(browser, 'Fazer comida', "Arroz integral, frango e alface")

# Fazendo as tarefas

for i in range(0, 4):
    wdw.until(presence_of_element_located(locator_botao))
    browser.find_element(*locator_botao).click()
    sleep(2)
