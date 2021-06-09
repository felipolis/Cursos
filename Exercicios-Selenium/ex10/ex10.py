from functools import partial
from selenium.webdriver import Firefox
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from time import sleep


def tarefa(driver, nome, descricao):
    driver.find_element_by_id('todo-name').send_keys(nome)
    sleep(2)
    driver.find_element_by_id('todo-desc').send_keys(descricao)
    sleep(2)
    driver.find_element_by_id('todo-submit').click()
    sleep(2)


def esperar_elemento(by, elemento, webdriver):
    print(f'Tentando encontrar {elemento} by {by}')
    if webdriver.find_elements(by, elemento):
        print("ACHOOOOOOOOOOU!")
        return True
    return False


url = 'https://selenium.dunossauro.live/exercicio_10.html'
driver = Firefox()
wdw = WebDriverWait(driver, 10)
driver.get(url)

# Fazer o formulario

tarefa(driver, 'Fazer comida', "Arroz integral, frango e alface")

# esperar aparecer os botoes

for i in range(4):
    sleep(2)
    wdw.until(partial(esperar_elemento, By.CSS_SELECTOR, '.buttons .btn-primary'),
              "Não foi encontrado")
    driver.find_element(By.CSS_SELECTOR, '.buttons .btn-primary').click()
