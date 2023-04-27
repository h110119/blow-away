let coL = 0
let row = 0
basic.showIcon(IconNames.Ghost)
basic.forever(function () {
    for (let index = 0; index < 4; index++) {
        if (input.soundLevel() > 128) {
            row = randint(0, 4)
            coL = randint(0, 4)
        }
        if (led.point(coL, row)) {
            led.unplot(coL, row)
            led.plot(coL + 0, row)
        }
    }
})
