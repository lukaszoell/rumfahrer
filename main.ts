let dir = 0
let farbe = 0
let blink = 0
let moveStart = 0
let zeit = 0
let strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
basic.forever(function () {
    basic.showArrow(ArrowNames.North)
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 128)
    zeit = randint(1, 10)
    moveStart = control.millis()
    blink = control.millis()
    farbe = 0
    strip.showColor(neopixel.colors(NeoPixelColors.Green))
    while (maqueen.Ultrasonic(PingUnit.Centimeters) > 10 && control.millis() < moveStart + zeit * 1000) {
        if (blink < control.millis() - 1000) {
            if (farbe == 0) {
                strip.showColor(neopixel.colors(NeoPixelColors.Blue))
                farbe = 1
            } else {
                strip.showColor(neopixel.colors(NeoPixelColors.Green))
                farbe = 0
            }
            blink = control.millis()
        }
    }
    zeit = randint(200, 2000)
    dir = randint(0, 1)
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    if (dir == 0) {
        basic.showArrow(ArrowNames.East)
        maqueen.motorStop(maqueen.Motors.M1)
    } else {
        basic.showArrow(ArrowNames.West)
        maqueen.motorStop(maqueen.Motors.M2)
    }
    basic.pause(zeit)
})
