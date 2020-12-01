n = 0
m = 0
strip = neopixel.create(DigitalPin.P12, 8, NeoPixelMode.RGB)
strip.set_brightness(30)
list2 = [0, 1, 2, 3, 4, 5, 6, 7]

def on_forever():
    global m, n
    strip.set_pixel_color(list2[0], neopixel.colors(NeoPixelColors.RED))
    strip.set_pixel_color(list2[1], neopixel.colors(NeoPixelColors.ORANGE))
    strip.set_pixel_color(list2[2], neopixel.colors(NeoPixelColors.YELLOW))
    strip.set_pixel_color(list2[3], neopixel.colors(NeoPixelColors.GREEN))
    strip.set_pixel_color(list2[4], neopixel.colors(NeoPixelColors.BLUE))
    strip.set_pixel_color(list2[5], neopixel.colors(NeoPixelColors.INDIGO))
    strip.set_pixel_color(list2[6], neopixel.colors(NeoPixelColors.VIOLET))
    strip.set_pixel_color(list2[7], neopixel.colors(NeoPixelColors.PURPLE))
    strip.show()
    for index in range(8):
        m = list2[index]
        n = list2[index + 1]
        list2[index + 1] = m
        m = list2[index + 2]
        list2[index + 2] = n
        basic.show_number(m)
        basic.pause(500)
basic.forever(on_forever)
