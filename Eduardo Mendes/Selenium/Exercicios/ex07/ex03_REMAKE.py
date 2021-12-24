from selenium.webdriver import Firefox
from time import sleep
from selenium.webdriver.support.events import (
    AbstractEventListener,
    EventFiringWebDriver
)


class Escuta(AbstractEventListener):
    def after_navigate_to(self, url, driver):
        print(f"Entrando na pagina: {driver.title}")

    def before_click(self, element, driver):
        print(f"Você clicou em {element.text}")

    def after_navigate_back(self, driver):
        print(f"Voltando para a pagina: {driver.title}")


browser = Firefox()
wrap_browser = EventFiringWebDriver(browser, Escuta())
wrap_browser.get('https://selenium.dunossauro.live/exercicio_03.html')
sleep(3)

while True:
    elemento = wrap_browser.find_element_by_tag_name('main')
    ancoras = elemento.find_elements_by_tag_name('a')
    for ancora in ancoras:
        sleep(2)
        wrap_browser.get(ancora.get_attribute('href'))
        if 'diabao' not in wrap_browser.current_url:
            break
        else:
            wrap_browser.back()

    if 'page_4' in wrap_browser.current_url:
        sleep(3)
        wrap_browser.refresh()
        break
