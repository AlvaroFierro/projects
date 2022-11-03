import pyautogui
import time 
import random

for z in range(100000):
    x = random.randint(0,200)
    y = random.randint(0,200)
    pyautogui.moveTo(x,y)

    localtime = time.localtime()
    result = time.strftime("%I:%M:%S %p",localtime)

    time.sleep(20)