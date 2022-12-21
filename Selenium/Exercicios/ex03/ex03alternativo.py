from selenium.webdriver import Firefox
from time import sleep

browser = Firefox()
browser.get('https://selenium.dunossauro.live/exercicio_03.html')
sleep(3)

while True:
    elemento = browser.find_element_by_tag_name('main')
    ancoras = elemento.find_elements_by_tag_name('a')
    for ancora in ancoras:
        sleep(2)
        browser.get(ancora.get_attribute('href'))
        if 'diabao' not in browser.current_url:
            break
        else:
            browser.back()

    if 'page_4' in browser.current_url:
        sleep(3)
        browser.refresh()
        break
