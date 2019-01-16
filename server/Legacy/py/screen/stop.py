import RPi.GPIO as GPIO
import time
off = GPIO.HIGH
on = GPIO.LOW
down = 10
up = 8
GPIO.setmode(GPIO.BOARD)

GPIO.setup(down, off)

GPIO.setup(up, off)
