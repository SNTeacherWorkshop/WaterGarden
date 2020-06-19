input.onButtonPressed(Button.A, function () {
    Water += 1
})
let Water = 10
basic.forever(function () {
    if (Water >= 10) {
        basic.showLeds(`
            # # . # #
            # # . # #
            . . # . .
            # # . # #
            # # . # #
            `)
    } else if (Water >= 6) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . # . .
            . # . # .
            . . . . .
            `)
    } else if (Water >= 3) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        music.playMelody("C5 - C5 - C5 - C5 - ", 120)
    } else if (Water >= 0) {
        basic.showIcon(IconNames.Ghost)
        basic.showString("Water!")
    }
    basic.pause(1000)
    Water += -1
})
