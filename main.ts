input.onButtonPressed(Button.A, function () {
    if (Birthday == true) {
        music.startMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.Once)
    }
    basic.pause(1000)
})
input.onButtonPressed(Button.B, function () {
    while (Birthday == true) {
        basic.showLeds(`
            . # . # .
            # # # # #
            # # # # #
            . # # # .
            . . # . .
            `)
    }
})
let Birthday = false
Birthday = true
