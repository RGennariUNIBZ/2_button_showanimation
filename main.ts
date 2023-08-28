let strip = neopixel.create(DigitalPin.P1, 7, NeoPixelMode.RGB)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        strip.showRainbow(1, 360)
    } else {
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
    }
})
