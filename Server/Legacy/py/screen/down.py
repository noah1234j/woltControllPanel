import RPi.GPIO as GPIO
import time
off = GPIO.HIGH
on = GPIO.LOW
down = 10
up = 8
GPIO.setmode(GPIO.BOARD)

GPIO.setup(up, off)

GPIO.setup(down, on)

time.sleep(30.4)

GPIO.setup(down, off)


