from selenium.webdriver import Firefox
from time import sleep
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support.expected_conditions import (
    presence_of_element_located,
    text_to_be_present_in_element
)

url = 'https://selenium.dunossauro.live/exercicio_03.html'
browser = Firefox()
browser.get(url)

wdw = WebDriverWait(browser, 30)

# Pagina inicial
locator_comecar = (By.CSS_SELECTOR, 'a[href="page_1.html"]')
wdw.until(presence_of_element_located(locator_comecar))
browser.find_element(*locator_comecar).click()

# Pagina 1
locator_1 = (By.CSS_SELECTOR, 'a[attr="errado"]')
wdw.until(presence_of_element_located(locator_1))
browser.find_element(*locator_1).click()

# Pagina 2
locator_2 = (By.CSS_SELECTOR, 'a[attr="certo"]')
wdw.until(presence_of_element_located(locator_2))
browser.find_element(*locator_2).click()

# Pagina 3
locator_3 = (By.CSS_SELECTOR, 'a[href="page_4.html"]')
wdw.until(presence_of_element_located(locator_3))
browser.find_element(*locator_3).click()

# Pagina 4
locator_4 = (By.CSS_SELECTOR, 'pre')
wdw.until(text_to_be_present_in_element(locator_4, "Sou"))
browser.refresh()
print('Fim do programa!')
