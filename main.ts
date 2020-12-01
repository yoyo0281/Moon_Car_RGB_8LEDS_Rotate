let n = 0
let m = 0
let strip = neopixel.create(DigitalPin.P12, 8, NeoPixelMode.RGB)
strip.setBrightness(30)
let neo = [0, 1, 2, 3, 4, 5, 6, 7]
let len = neo.length - 1
basic.forever(function () {
    m = 0
    n = 0
    for (let index = 0; index <= len; index++) {
        if (m == 0 && n == 0) {
            m = neo[index]
            n = neo[index + 1]
            neo[0] = neo[len]
        } else {
            neo[index] = m
            m = n
            n = neo[index + 1]
        }
    }
    for (let index = 0; index <= len; index++) {
        basic.showString("" + (neo[index]))
        basic.pause(10)
    }
    basic.showIcon(IconNames.Heart)
    basic.pause(100)
    basic.showIcon(IconNames.SmallHeart)
    strip.setPixelColor(neo[0], neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(neo[1], neopixel.colors(NeoPixelColors.Orange))
    strip.setPixelColor(neo[2], neopixel.colors(NeoPixelColors.Yellow))
    strip.setPixelColor(neo[3], neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(neo[4], neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(neo[5], neopixel.colors(NeoPixelColors.Indigo))
    strip.setPixelColor(neo[6], neopixel.colors(NeoPixelColors.Violet))
    strip.setPixelColor(neo[7], neopixel.colors(NeoPixelColors.Purple))
    strip.show()
})
