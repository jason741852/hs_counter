from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import sys

# This will give you an webdriver location error. For Ubuntu,
# download the webdriver and move it to path /usr/local/bin
driver = webdriver.Chrome()
driver.get("http://127.0.0.1:5000/")
driver.maximize_window()

#----------------------SPLASH PAGE ----------------------#

try:
    driver.implicitly_wait(10)
    room_name_field = driver.find_element_by_id("input0")
    room_name_field.send_keys("Radiant")

    room_name_field = driver.find_element_by_id("input1")
    room_name_field.send_keys("Velen")

    room_name_field = driver.find_element_by_id("input2")
    room_name_field.send_keys("Mind blast")

    room_name_field = driver.find_element_by_id("input5")
    room_name_field.send_keys("Holy Smite")

    room_name_field = driver.find_element_by_id("input6")
    room_name_field.send_keys("Alley Armorsmith")

    room_name_field = driver.find_element_by_id("input8")
    room_name_field.send_keys("Genzo, the Shark")

    driver.find_element_by_id("submit").send_keys(Keys.RETURN)
except:
    print("error occurred")
    # driver.quit()


# room_name_field.clear()
# room_name_field.send_keys("Abusive Sergent")
# room_name_field = driver.find_element_by_id("createRoom_button")
# room_name_field.send_keys(Keys.RETURN)
