from time import sleep
from selenium.webdriver import Firefox
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.support.expected_conditions import alert_is_present

browser = Firefox()
wdw = WebDriverWait(browser, 30)

browser.get('http://selenium.dunossauro.live/aula_11_a')
sleep(3)

browser.find_element_by_id('alertd').click()

print('Antes de esperar o alerta')
alerta = wdw.until(alert_is_present())  # Espera o alerta, retorna o alerta
print('Depois de esperar o alerta')

alerta.accept()

