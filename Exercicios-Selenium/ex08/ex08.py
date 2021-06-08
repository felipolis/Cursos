from selenium.webdriver import Firefox
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.keys import Keys


def caixa_colorida(key1=None, key2=None):
    ac.pause(2)
    if key1:
        ac.key_down(key1)
        ac.pause(2)
    if key2:
        ac.key_down(key2)
        ac.pause(2)
    ac.move_to_element(caixa)
    ac.pause(2)
    ac.click()
    ac.pause(2)
    ac.double_click()
    ac.pause(2)
    ac.move_to_element(span)
    ac.pause(2)
    if key1:
        ac.key_up(key1)
        ac.pause(2)
    if key2:
        ac.key_up(key2)
        ac.pause(2)


url = 'https://selenium.dunossauro.live/caixinha'

browser = Firefox()
browser.get(url)

caixa = browser.find_element_by_id('caixa')
span = browser.find_element_by_tag_name('span')

ac = ActionChains(browser)

caixa_colorida()
ac.pause(2)
caixa_colorida(Keys.SHIFT)
ac.pause(2)
caixa_colorida(Keys.CONTROL)
ac.pause(2)
caixa_colorida(Keys.SHIFT, Keys.CONTROL)
ac.pause(2)

ac.move_to_element(caixa)
ac.pause(2)
ac.context_click()
ac.pause(2)
ac.perform()
